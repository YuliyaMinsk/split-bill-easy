import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { customRender } from '@/shared/tests';

import { MainPage } from '../main-page';

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    customRender(<MainPage />);
    const h1 = await screen.queryByText('Split Bill Easy');

    expect(h1).toBeInTheDocument();
  });
});
