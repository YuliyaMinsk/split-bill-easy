import { fireEvent, screen, waitFor, within, render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createTestStore } from './test-store';

interface CustomRenderOptions extends RenderOptions {
  initialState?: Record<string, unknown>;
}

interface WrapperProps {
  children: ReactNode;
}

// How to use customRender with initialState:
// customRender(<MyComponent />, { initialState: { /* values */ } });

const customRender = (
  ui: React.ReactElement,
  { initialState, ...renderOptions }: CustomRenderOptions = {},
): RenderResult => {
  const testStore = createTestStore(initialState);

  const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
      <Provider store={testStore}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export { fireEvent, screen, waitFor, within };
export { default as userEvent } from '@testing-library/user-event';
export { customRender };
