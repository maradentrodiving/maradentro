import React, { useContext } from 'react'
import LangContext from '../LangContext'
import { useTitle } from 'hookrouter'

import ContentEN from './content.en.js'
import ContentES from './content.es.js'

const translations = {
  title: [
    "About Mar Adentro Diving Mahahual",
    "Acerca del centro de buceo Mar Adentro Mahahual"
  ],
  content: [<ContentEN />, <ContentES />]
}

export default function AboutPage ({ lang }) {
  const { setLang, setLangFn, t } = useContext(LangContext)

  console.log([setLang, lang])
  if (setLang !== lang) setLangFn(lang)

  useTitle(t(translations.title))

  return t(translations.content)
}
