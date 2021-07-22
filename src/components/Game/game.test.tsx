import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './index';

describe('Game', () => {
  it('renders Game correctly', () => {
    const { container } = render(<Game></Game>)

    expect(container.childElementCount).toBeTruthy()
  })

  it('renders Game with default classList', () => {
    const { container } = render(<Game></Game>)
    expect(container.children[0]).toHaveClass('game-container')
  })

})
