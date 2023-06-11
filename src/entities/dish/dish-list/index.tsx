import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';

import { Dish } from '../dish';

const DishList = (): JSX.Element => {
  const dishList = useSelector((state: RootState) => state.bill);

  return (
    <>
      {dishList.map((dish) => (
        <Dish dish={dish} />
      ))}
    </>
  );
};

export { DishList };
