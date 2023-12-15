import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { MainPage } from '../main-page';

import { customRender } from '@/shared/tests';

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    customRender(<MainPage />);
    const h1 = await screen.queryByText('Split Bill Easy');

    expect(h1).toBeInTheDocument();
  });
});
