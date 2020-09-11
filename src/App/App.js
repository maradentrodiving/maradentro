import React, { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './App.module.css'

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
  const body = useRef()

  useEffect(() => {
    const footer = document.querySelector('footer')
    body.current.style.paddingBottom = `${footer.clientHeight + 20}px`
  })

  return (
    <LangContextProvider>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main ref={body} className={styles.main}>
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
