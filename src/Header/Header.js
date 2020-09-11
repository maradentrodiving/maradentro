import React, { useContext } from 'react'
import LangContext from '../LangContext'
import styles from './Header.module.css'
import * as routes from '../routes'
import { assert } from '../utils'
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

    // navigate(routes[toLang][routeKey].path)
    window.location = routes[toLang][routeKey].path
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
