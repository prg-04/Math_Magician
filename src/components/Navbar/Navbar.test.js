import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  test('renders the logo', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const logo = screen.getByRole('heading', { name: /Math Magician/i });
    expect(logo).toBeInTheDocument();
  });

  test('renders the navigation links', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');

    const calculatorLink = screen.getByRole('link', { name: /Calculator/i });
    expect(calculatorLink).toBeInTheDocument();
    expect(calculatorLink.getAttribute('href')).toBe('/calculator');

    const quotesLink = screen.getByRole('link', { name: /Quotes/i });
    expect(quotesLink).toBeInTheDocument();
    expect(quotesLink.getAttribute('href')).toBe('/quotes');
  });

  test('applies the "link" class to navigation links', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    links.forEach((link) => {
      expect(link).toHaveClass('link');
    });
  });
});
