import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import ErrorBoundary from '../Errors/Errors'

import { useRoutes, navigate } from 'hookrouter'
import routes from '../router'

import { LangContextProvider } from '../LangContext'

function GoHome () {
  useEffect(() => {
    console.log("~ HTTP 404, redirecting to the home page.")
    navigate('/', true)
  })

  return (
    <p>Page not found.</p>
  )
}

export default function App () {
  const currentRoute = useRoutes(routes)

  return (
    <LangContextProvider>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main /*className={styles.mainColumn}*/>
        <ErrorBoundary>
          {currentRoute || <GoHome /> }
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </LangContextProvider>
  )
}
