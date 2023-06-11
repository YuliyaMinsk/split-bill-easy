import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, TextField } from '@mui/material';

import { Dish } from '@/shared/types';

type DishNewProps = {
  dish: Dish;
  onQuantityChange: (quantity: number) => void;
  updateValue: (dish: Dish) => void;
};

const DishNew = ({ dish, onQuantityChange, updateValue }: DishNewProps): JSX.Element => {
  const { t } = useTranslation();
  const [newDish, setNewDish] = useState(dish);

  useEffect(() => {
    updateValue(newDish);
  }, [newDish, updateValue]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setNewDish({ ...dish, name: newName });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value);
    setNewDish({ ...dish, price: newPrice });
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    onQuantityChange(newQuantity);
    setNewDish({ ...dish, quantity: newQuantity });
  };

  return (
    <List>
      <ListItem>
        <TextField
          id="outlined-basic"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Item') || ''}
          placeholder={t('Enter an item') || ''}
          onChange={handleNameChange}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="outlined-basic"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Item cost') || ''}
          placeholder={t('Enter an item cost') || ''}
          onChange={handlePriceChange}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="outlined-basic"
          type="number"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Quantity') || ''}
          placeholder={t('Enter a quantity') || ''}
          onChange={handleQuantityChange}
        />
      </ListItem>
    </List>
  );
};

export { DishNew };
