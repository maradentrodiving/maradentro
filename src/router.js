import React from 'react'
import * as routes from './routes'

import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import DivingCostaMayaPage from './DivingCostaMayaPage/DivingCostaMayaPage'
import ContactPage from './ContactPage/ContactPage'

export default {
  // Without default language.
  [routes.en.homePagePath.path]: () => <HomePage />,

  // Defaulting to EN.
  [routes.en.aboutPagePath.path]: () => <AboutPage lang="en" />,
  [routes.en.divingCostaMayaPagePath.path]: () => <DivingCostaMayaPage lang="en" />,
  [routes.en.contactPagePath.path]: () => <ContactPage lang="en" />,

  // Defaulting to ES.
  [routes.es.aboutPagePath.path]: () => <AboutPage lang="es" />,
  [routes.es.divingCostaMayaPagePath.path]: () => <DivingCostaMayaPage lang="es" />,
  [routes.es.contactPagePath.path]: () => <ContactPage lang="es" />,
}
