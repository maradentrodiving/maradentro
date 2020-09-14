import React, { useEffect, useContext } from 'react'
import LangContext from '../LangContext'
import { useTitle } from 'hookrouter'

import ContentEN from './content.en.js'
import ContentES from './content.es.js'

const translations = {
  title: [
    "Mar Adentro Diving Mahahual: services",
    "Centro de buceo Mar Adentro Mahahual: servicios",
  ],
  content: [<ContentEN />, <ContentES />]
}

export default function ServicesPage ({ lang }) {
  const { setLang, setLangFn, t } = useContext(LangContext)

  useEffect(() => {
    if (setLang !== lang) setLangFn(lang)
  })

  useTitle(t(translations.title))

  return t(translations.content)
}
