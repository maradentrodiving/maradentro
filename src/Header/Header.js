import React from 'react'
import styles from './Header.module.css'
import * as routes from '../routes'
import { A } from 'hookrouter'

function debug (what) {
  console.log(what)
  return null
}

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
  return (
    <header className={styles.header}>
      <RouteLabels routes={routes.en} />
    </header>
  )
}
