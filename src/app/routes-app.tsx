import { Routes, Route } from 'react-router-dom';

import { MainPage } from '../pages/main-page';
import { PayersPage } from '../pages/payers-page';
import { ItemsPage } from '../pages/items-page';
import { CalculationsPage } from '../pages/calculations-page';

import { AppRoutes } from '../shared/enums';
import { createPath } from '../shared/utils';

const RoutesApp = (): JSX.Element => {
  return (
    <Routes>
      <Route path={createPath(AppRoutes.HOME)} element={<MainPage />} />
      <Route path={createPath(AppRoutes.PAYERS)} element={<PayersPage />} />
      <Route path={createPath(AppRoutes.ITEMS)} element={<ItemsPage />} />
      <Route path={createPath(AppRoutes.CALCULATIONS)} element={<CalculationsPage />} />
      <Route path={'*'} element={<MainPage />} />
    </Routes>
  );
};

export { RoutesApp };
