import React from 'react';
import { render } from '@testing-library/react';
import Grid from './index';

describe('Grid', () => {
  it('renders Grid correctly', () => {
    const { container } = render(<Grid></Grid>)

    expect(container.childElementCount).toBeTruthy()
  })

  it('renders Grid with default classList', () => {
    const { container } = render(<Grid></Grid>)
    expect(container.children[0]).toHaveClass('grid-container')
  })

})
