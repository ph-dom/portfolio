import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from './not-found.component'

test('renders not found', () => {
  render(<NotFound />)
  const linkElement = screen.getByText(/Error :c/i)
  expect(linkElement).toBeInTheDocument()
})
