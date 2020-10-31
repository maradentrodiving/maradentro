import React from 'react'
import { es as routes } from '../routes'
// import styles from './ServicesPage.module.css'

const { servicesPagePath } = routes

export default () => (
  <>
    <h1>Servicios</h1>

    <h2>Discover Scuba Diving o bautismo de buceo</h2>
    <p>
      ¿Quisieras saber cómo es respirar bajo el agua, pero no estás seguro? Cuenta con nosotros para vivir esta experiencia inolvidable. ¿Y dónde mejor sino en Mahahual?
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.dsd}`}>Leer más</a>
    </p>

    <h2>Cursos PADI</h2>

    <h3>PADI Open Water Diver</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.ow}`}>Leer más</a>
    </p>

    <h3>PADI Advanced Open Water Diver</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.aow}`}>Leer más</a>
    </p>

    <h3>PADI Rescue Diver</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <p>
      <a href={`${servicesPagePath.path}/${servicesPagePath.pages.rescue}`}>Leer más</a>
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
