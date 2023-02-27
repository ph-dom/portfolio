import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './translations/en.json'
import spanish from './translations/es.json'

export const resources = {
  en: {
    translations: english
  },
  es: {
    translations: spanish
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
  defaultNS: 'translations'
})
