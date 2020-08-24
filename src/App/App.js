import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import ErrorBoundary from '../Errors/Errors'

import { useRoutes } from 'hookrouter'
import routes from '../router'

import { LangContextProvider } from '../LangContext'

export default function App () {
  const currentRoute = useRoutes(routes)

  return (
    <LangContextProvider>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main /*className={styles.mainColumn}*/>
        <ErrorBoundary>
          {currentRoute || routes.en.HomePagePath /* TODO: No solo EN */}
        </ErrorBoundary>
      </main>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </LangContextProvider>
  )
}
