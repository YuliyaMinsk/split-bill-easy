import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';

import { Dish } from '../dish';

const DishList = (): JSX.Element => {
  const { t } = useTranslation();
  const billList = useSelector((state: RootState) => state.bill.billList);

  if (billList.length === 0) {
    return (
      <Box sx={{ mt: '1rem', ml: 1, mr: 1, mb: '2rem', textAlign: 'center' }}>
        <p>{t('There are no items in your bill. Fill the form below to add it')}</p>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: '1rem', ml: 1, mr: 1, mb: '2rem' }}>
      {billList.map((bill) => (
        <Dish key={bill.dish.name + bill.dish.id} billLine={bill} />
      ))}
    </Box>
  );
};

export { DishList };
