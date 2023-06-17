import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders the Calculator component', () => {
    const { getByText } = render(<Calculator />);

    const headingElement = getByText("Let's do some math...");
    expect(headingElement).toBeInTheDocument();

    const buttons = [
      '0',
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];

    buttons.forEach((button) => {
      const buttonElement = getByText(button);
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
