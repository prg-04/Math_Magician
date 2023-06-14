import React from 'react';
import { render, screen } from '@testing-library/react';
import Quotes from './Quotes';

describe('Quotes', () => {
  test('renders the loading message when isLoading is true', () => {
    render(<Quotes isLoading quote="" hasError={false} />);
    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeTruthy();
  });

  test('renders the error message when hasError is true', () => {
    render(<Quotes isLoading={false} quote="" hasError />);

    const errorMessage = screen.getByText(
      /Error occurred while fetching the quote./i,
    );
    expect(errorMessage).toBeTruthy();
  });

  test('renders the quote when isLoading and hasError are false', () => {
    const quoteText = 'This is a test quote';
    render(<Quotes isLoading={false} quote={quoteText} hasError={false} />);

    const quoteElement = screen.getByText(new RegExp(`"${quoteText}"`));
    expect(quoteElement).toBeTruthy();
  });
});
