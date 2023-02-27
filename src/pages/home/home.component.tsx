import React from 'react'
import { useTranslation } from 'react-i18next'

function Home (): JSX.Element {
  const { t } = useTranslation()
  return (
    <React.Fragment>
      <h1>{t('title')}</h1>
    </React.Fragment>
  )
}

export default Home
