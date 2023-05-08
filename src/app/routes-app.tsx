import { Routes, Route } from 'react-router-dom';

import { MainPage } from '../pages/main-page';
import { PayersPage } from '../pages/payers-page';
import { ItemsPage } from '../pages/items-page';
import { CalculationsPage } from '../pages/calculations-page';

import { AppRoutes } from '../shared/enums';

const RoutesApp = (): JSX.Element => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<MainPage />} />
      <Route path={AppRoutes.PAYERS} element={<PayersPage />} />
      <Route path={AppRoutes.ITEMS} element={<ItemsPage />} />
      <Route path={AppRoutes.CALCULATIONS} element={<CalculationsPage />} />
      <Route path={'*'} element={<MainPage />} />
    </Routes>
  );
};

export { RoutesApp };
