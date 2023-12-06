import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { RootState } from '@/shared/store';

import { Dish } from '../dish';

const DishList = (): JSX.Element => {
  const billList = useSelector((state: RootState) => state.bill.billList);

  return (
    <Box sx={{ mt: '1rem', ml: 1, mr: 1, mb: '2rem' }}>
      {billList.map((bill) => (
        <Dish key={bill.dish.name + bill.dish.id} billLine={bill} />
      ))}
    </Box>
  );
};

export { DishList };
