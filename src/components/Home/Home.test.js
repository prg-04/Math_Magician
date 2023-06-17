import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';
// Import the toBeInTheDocument matcher
describe('Home', () => {
  test('renders the welcome message', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const welcomeMessage = screen.getByText(/Welcome to Math Magician/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
  test('renders the calculator section', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const calculatorSection = screen.getByRole('heading', {
      name: /Calculator/i,
    });
    expect(calculatorSection).toBeInTheDocument();
    const goToCalculatorLink = screen.getByRole('link', {
      name: /Go to Calculator/i,
    });
    expect(goToCalculatorLink).toBeInTheDocument();
    expect(goToCalculatorLink).toHaveAttribute('href', '/calculator');
  });
  test('renders the quote section', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const quoteSection = screen.getByRole('heading', {
      name: /Quote of the Day/i,
    });
    expect(quoteSection).toBeInTheDocument();
    const seeQuoteLink = screen.getByRole('link', {
      name: /See Quote of the Day/i,
    });
    expect(seeQuoteLink).toBeInTheDocument();
    expect(seeQuoteLink).toHaveAttribute('href', '/quotes');
  });
});
