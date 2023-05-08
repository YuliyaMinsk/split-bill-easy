import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Person, ReceiptLong, Functions } from '@mui/icons-material';

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      onChange={(_event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label={t('Payers')} icon={<Person />} />
      <BottomNavigationAction label={t('Items')} icon={<ReceiptLong />} />
      <BottomNavigationAction label={t('Calculations')} icon={<Functions />} />
    </BottomNavigation>
  );
};

export { Footer };
