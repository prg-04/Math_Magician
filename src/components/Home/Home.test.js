import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Home />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
