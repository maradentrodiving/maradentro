import React from 'react'
import * as routes from './routes'

import HomePage from './HomePage/HomePage'
import ServicesPage from './ServicesPage/ServicesPage'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'

import DSDPage from './ServicesPage/DSDPage/DSDPage'
import OWPage from './ServicesPage/OWPage/OWPage'
import AOWPage from './ServicesPage/AOWPage/AOWPage'
import RescuePage from './ServicesPage/RescuePage/RescuePage'
import EFRPage from './ServicesPage/EFRPage/EFRPage'
import EBPPage from './ServicesPage/EBPPage/EBPPage'
import ChinchorroPage from './ChinchorroPage/ChinchorroPage'
import SafariPage from './SafariPage/SafariPage'

import QuePodrasVerPage from './MahahualPage/QuePodrasVerPage/QuePodrasVerPage'
import BuceoNocturnoPage from './MahahualPage/BuceoNocturnoPage/BuceoNocturnoPage'
import DivingCostaMayaPage from './MahahualPage/DivingCostaMayaPage/DivingCostaMayaPage'
import YatePage from './MahahualPage/YatePage/YatePage'

export default {
  // Without default language.
  [routes.en.homePagePath.path]: () => <HomePage />,

  // Defaulting to EN.
  [routes.en.servicesPagePath.path]: () => <ServicesPage lang="en" />,
  [routes.en.aboutPagePath.path]: () => <AboutPage lang="en" />,
  [routes.en.chinchorroPagePath.path]: () => <ChinchorroPage lang="en" />,
  [routes.en.safariPagePath.path]: () => <SafariPage lang="en" />,
  [routes.en.contactPagePath.path]: () => <ContactPage lang="en" />,

  [`${routes.en.mahahualPagePath.path}/${routes.en.mahahualPagePath.pages.quePodrasVer}`]: () => <QuePodrasVerPage lang="en" />,
  [`${routes.en.mahahualPagePath.path}/${routes.en.mahahualPagePath.pages.nocturno}`]: () => <BuceoNocturnoPage lang="en" />,
  [`${routes.en.mahahualPagePath.path}/${routes.en.mahahualPagePath.pages.divingCostaMaya}`]: () => <DivingCostaMayaPage lang="en" />,
  [`${routes.en.mahahualPagePath.path}/${routes.en.mahahualPagePath.pages.yate}`]: () => <YatePage lang="en" />,

  [`${routes.en.servicesPagePath.path}/${routes.en.servicesPagePath.pages.dsd}`]: () => <DSDPage lang="en" />,
  [`${routes.en.servicesPagePath.path}/${routes.en.servicesPagePath.pages.ow}`]: () => <OWPage lang="en" />,
  [`${routes.en.servicesPagePath.path}/${routes.en.servicesPagePath.pages.aow}`]: () => <AOWPage lang="en" />,
  [`${routes.en.servicesPagePath.path}/${routes.en.servicesPagePath.pages.rescue}`]: () => <RescuePage lang="en" />,
  [`${routes.en.servicesPagePath.path}/${routes.en.servicesPagePath.pages.efr}`]: () => <EFRPage lang="en" />,
  [`${routes.en.servicesPagePath.path}/${routes.en.servicesPagePath.pages.profundo}`]: () => <EBPPage lang="en" />,

  // Defaulting to ES.
  [routes.es.servicesPagePath.path]: () => <ServicesPage lang="es" />,
  [routes.es.aboutPagePath.path]: () => <AboutPage lang="es" />,
  [routes.es.chinchorroPagePath.path]: () => <ChinchorroPage lang="es" />,
  [routes.es.safariPagePath.path]: () => <SafariPage lang="es" />,
  [routes.es.contactPagePath.path]: () => <ContactPage lang="es" />,

  [`${routes.es.mahahualPagePath.path}/${routes.es.mahahualPagePath.pages.quePodrasVer}`]: () => <QuePodrasVerPage lang="es" />,
  [`${routes.es.mahahualPagePath.path}/${routes.es.mahahualPagePath.pages.nocturno}`]: () => <BuceoNocturnoPage lang="es" />,
  [`${routes.es.mahahualPagePath.path}/${routes.es.mahahualPagePath.pages.divingCostaMaya}`]: () => <DivingCostaMayaPage lang="es" />,
  [`${routes.es.mahahualPagePath.path}/${routes.es.mahahualPagePath.pages.yate}`]: () => <YatePage lang="es" />,

  [`${routes.es.servicesPagePath.path}/${routes.es.servicesPagePath.pages.dsd}`]: () => <DSDPage lang="es" />,
  [`${routes.es.servicesPagePath.path}/${routes.es.servicesPagePath.pages.ow}`]: () => <OWPage lang="es" />,
  [`${routes.es.servicesPagePath.path}/${routes.es.servicesPagePath.pages.aow}`]: () => <AOWPage lang="es" />,
  [`${routes.es.servicesPagePath.path}/${routes.es.servicesPagePath.pages.rescue}`]: () => <RescuePage lang="es" />,
  [`${routes.es.servicesPagePath.path}/${routes.es.servicesPagePath.pages.efr}`]: () => <EFRPage lang="es" />,
  [`${routes.es.servicesPagePath.path}/${routes.es.servicesPagePath.pages.profundo}`]: () => <EBPPage lang="es" />,
}
