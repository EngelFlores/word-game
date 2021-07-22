import React from 'react'
import { render } from '@testing-library/react'

import Card from './index'

describe('Card', () => {
  it('renders card correctly', () => {
    const { container } = render(<Card>Text</Card>)

    expect(container.childElementCount).toBeTruthy()
  })
})