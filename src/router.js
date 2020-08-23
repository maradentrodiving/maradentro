import React from 'react'
import * as routes from './routes'

import HomePage from './HomePage/HomePage'

export default {
  [routes.en.homePagePath]: () => <HomePage />,
}
