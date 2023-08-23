import { describe, expect, test } from 'vitest';
import Header from '../components/Header';
import { render, screen } from '@testing-library/react';
import { resizeWindow } from '@testing-library/react/pure';

import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  test('header render correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('logo rendered correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getAllByText(/walia jobs/i);
    expect(logo[0]).toBeInTheDocument();
    expect(logo.length).toBe(2);
  });

  test('Menu is closed initially', () => {
    window.resizeTo(300, 1000);
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>

      // TODO:  add more tests here
    );
    const menu = screen.getByTestId('menu');

    expect(menu).toBeInTheDocument();
  });
});
