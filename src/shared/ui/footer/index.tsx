import { Person, ReceiptLong, Functions } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '../../enums';
import { createPath, getRelativePath } from '../../utils';

const Footer: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState(getRelativePath(location.pathname));

  const handleChange = (_event: SyntheticEvent, tab: string) => {
    setActiveTab(tab);
    navigate(createPath(tab));
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation sx={{ mb: 2 }} showLabels value={activeTab} onChange={handleChange}>
        <BottomNavigationAction label={t('Payers')} icon={<Person />} value={AppRoutes.PAYERS} />
        <BottomNavigationAction label={t('Items')} icon={<ReceiptLong />} value={AppRoutes.ITEMS} />
        <BottomNavigationAction label={t('Calculations')} icon={<Functions />} value={AppRoutes.CALCULATIONS} />
      </BottomNavigation>
    </Paper>
  );
};

export { Footer };
