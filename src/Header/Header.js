import React, { useContext } from 'react'
import LangContext from '../LangContext'
import styles from './Header.module.css'
import * as routes from '../routes'
import { assert } from '../utils'
// import backgroundImage from images/cropped-sun.jpg
// import { A, navigate } from 'hookrouter'

const RouteLabel = ({ route }) => (
  <li>
    {/* <A href={route.path}>{route.label}</A> */}
    <a href={route.path}>{route.label}</a>
  </li>
)

const RouteLabels = ({ routes }) => (
  <ul>
    {Object.values(routes).map(route => (
      <RouteLabel key={route.path} route={route} />
    ))}
  </ul>
)

export default function Header () {
  const { setLang, setLangFn } = useContext(LangContext)
  const toLang = setLang === 'en' ? 'es' : 'en'

  function switchLang () {
    localStorage.setItem('lang', toLang)
    setLangFn(toLang)

    const routeKey = Object.keys(routes[setLang]).find(key => (
      routes[setLang][key].path === window.location.pathname
    ))

    if (routeKey) {
      // navigate(routes[toLang][routeKey].path)
      window.location = routes[toLang][routeKey].path
    } else {
      const { servicesPagePath } = routes[setLang]

      const serviceKey = Object.keys(servicesPagePath.pages).find(key => (
        window.location.pathname === `${servicesPagePath.path}/${servicesPagePath.pages[key]}`
      ))

      // TODO: Add the same redirection for mahahual pages.
      window.location = `${routes[toLang].servicesPagePath.path}/${routes[toLang].servicesPagePath.pages[serviceKey]}`
    }
  }

  return (
    <header className={styles.header}>
      <RouteLabels routes={routes[setLang]} />

      <div style={{position: 'absolute', top: 0, right: 0, padding: 5}}>
        <div className={assert(styles.lang)}>
          <span onClick={switchLang}>
            {toLang === 'en' ? '🇺🇸': '🇲🇽'}
          </span>
        </div>
      </div>
    </header>
  )
}
