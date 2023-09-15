import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { RootState } from '@/shared/store';

import { Dish } from '../dish';

const DishList = (): JSX.Element => {
  const dishList = useSelector((state: RootState) => state.bill);

  return (
    <Box sx={{ mt: '1rem', ml: 1, mr: 1, mb: '2rem' }}>
      {dishList.map((dish) => (
        <Dish dish={dish} />
      ))}
    </Box>
  );
};

export { DishList };
