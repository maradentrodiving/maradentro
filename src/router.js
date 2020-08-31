import React from 'react'
import * as routes from './routes'

import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'

function generate(what) {
  return () => {
    console.log(what)
    return <>Page: {what}</>
  }
}

export default {
  '/': generate('Home'),
  '/about': generate('about'),
  '/contact': generate('contact'),
}
/*
export default {
  // Without default language.
  [routes.en.homePagePath.path]: () => <HomePage />,

  // Defaulting to EN.
  [routes.en.aboutPagePath.path]: () => <AboutPage lang="en" />,
  [routes.en.contactPagePath.path]: () => <ContactPage lang="en" />,

  // Defaulting to ES.
  [routes.es.aboutPagePath.path]: () => <AboutPage lang="es" />,
  [routes.es.contactPagePath.path]: () => <ContactPage lang="es" />,
}
*/
