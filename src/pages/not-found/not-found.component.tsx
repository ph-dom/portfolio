import React from 'react'
import { useRouteError } from 'react-router-dom'

function NotFound (): JSX.Element {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <p>Ups :c</p>
    </div>
  )
}

export default NotFound
