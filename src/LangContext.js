import React, { createContext, useState } from 'react'
import { assert } from './utils'

const LangContext = createContext()

const validateLanguage = (lang) => (
  ['es', 'en'].includes(lang) && lang
)

export function LangContextProvider ({ children }) {
  const browserOrDefaultLanguage = (navigator.language || '').match(/^es/) ? 'es' : 'en'

  // This is set when we click the language flag.
  const storedLanguage = localStorage.getItem('lang')

  const [ setLang, _setLangFn ] = useState(validateLanguage(storedLanguage) || browserOrDefaultLanguage)

  function setLangFn(toLang) {
    if (validateLanguage(toLang)) {
      console.log(`~ Setting lang from ${setLang} to ${toLang} ${JSON.stringify({default: browserOrDefaultLanguage, stored: storedLanguage}).replace(/"/g, '').replace(/[,:]/g, '$& ')}`)
      _setLangFn(toLang)
    } else {
      console.error(`Lang not supported: ${toLang}`)
    }
  }

  const t = ([ enTranslation, esTranslation ]) => assert(setLang === 'en' ? enTranslation : esTranslation)

  return (
    <LangContext.Provider value={{setLang, setLangFn, t}}>
      {children}
    </LangContext.Provider>
  )
}

export default LangContext
