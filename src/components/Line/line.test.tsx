import React from 'react';
import { render } from '@testing-library/react';
import Line from './index';

describe('Line', () => {
  it('renders Line correctly', () => {
    const { container } = render(<Line></Line>)

    expect(container.childElementCount).toBeTruthy()
  })

  it('renders Line with default classList', () => {
    const { container } = render(<Line></Line>)
    expect(container.children[0]).toHaveClass('line-container')
  })

})
