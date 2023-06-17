import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Buttons from './Buttons';

describe('Buttons', () => {
  const buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '=',
    '+',
    '-',
    '*',
    '÷',
    'C',
    'AC',
  ];

  it('calls handleClick when a button is clicked', () => {
    const handleClick = jest.fn();
    const num1 = '123';

    const { getByText } = render(
      <Buttons buttons={buttons} handleClick={handleClick} num1={num1} />,
    );

    const buttonElement = getByText('=');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith('=');
  });

  it('renders the display div with the correct value', () => {
    const handleClick = jest.fn();
    const num1 = '123';

    const { getByText } = render(
      <Buttons buttons={buttons} handleClick={handleClick} num1={num1} />,
    );

    const displayDiv = getByText(num1);
    expect(displayDiv).toBeInTheDocument();
    expect(displayDiv).toHaveClass('display');
  });
});
