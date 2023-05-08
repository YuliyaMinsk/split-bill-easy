import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Person, ReceiptLong, Functions } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '../../enums';
import { createPath } from '../../utils';

const Footer = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        sx={{ mb: 3 }}
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={t('Payers')}
          icon={<Person />}
          value={AppRoutes.PAYERS}
          onClick={() => navigate(createPath(AppRoutes.PAYERS))}
        />
        <BottomNavigationAction
          label={t('Items')}
          icon={<ReceiptLong />}
          value={AppRoutes.ITEMS}
          onClick={() => navigate(createPath(AppRoutes.ITEMS))}
        />
        <BottomNavigationAction
          label={t('Calculations')}
          icon={<Functions />}
          value={AppRoutes.CALCULATIONS}
          onClick={() => navigate(createPath(AppRoutes.CALCULATIONS))}
        />
      </BottomNavigation>
    </Paper>
  );
};

export { Footer };
