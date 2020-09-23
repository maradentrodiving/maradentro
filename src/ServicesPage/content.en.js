import React from 'react'
import { en as routes } from '../routes'
// import styles from './ServicesPage.module.css'

const { servicesPagePath } = routes

export default () => (
  <>
    <h1>Services</h1>

    <h2>Discover Scuba Diving</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.dsd}`}>Read more</a>
    </p>

    <h2>Cursos PADI</h2>

    <h3>PADI Open Water Diver</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.ow}`}>Read more</a>
    </p>

    <h3>PADI Advanced Open Water Diver</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.aow}`}>Read more</a>
    </p>

    <h3>PADI Rescue Diver</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.rescue}`}>Read more</a>
    </p>

    <h3>Emergency First Response</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.efr}`}>Read more</a>
    </p>
  </>
)
