import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, TextField } from '@mui/material';

import { Dish } from '@/shared/types';

import { handleKeyDown } from './utils/handle-key-down';

type DishNewProps = {
  dish: Dish;
  onQuantityChange: (quantity: number) => void;
  updateValue: (dish: Dish) => void;
};

const DishNew = ({ dish, onQuantityChange, updateValue }: DishNewProps): JSX.Element => {
  const { t } = useTranslation();
  const [newDish, setNewDish] = useState(dish);

  const saveName = (newName: string) => {
    setNewDish({ ...dish, name: newName });
  };

  const savePrice = (newPrice: number) => {
    setNewDish({ ...dish, price: newPrice });
  };

  const saveQuantity = (newQuantity: number) => {
    onQuantityChange(newQuantity);
    setNewDish({ ...dish, quantity: newQuantity });
  };

  useEffect(() => {
    updateValue(newDish);
  }, [newDish, updateValue]);

  return (
    <List>
      <ListItem>
        <TextField
          id="item-name"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Item') || ''}
          placeholder={t('Enter an item') || ''}
          onBlur={(e) => saveName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, saveName)}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="item-cost"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Item cost') || ''}
          placeholder={t('Enter an item cost') || ''}
          onBlur={(e) => savePrice(parseFloat(e.target.value))}
          onKeyDown={(e) => handleKeyDown(e, savePrice)}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="item-quantity"
          type="number"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Quantity') || ''}
          placeholder={t('Enter a quantity') || ''}
          onBlur={(e) => saveQuantity(parseInt(e.target.value, 10))}
          onKeyDown={(e) => handleKeyDown(e, saveQuantity)}
        />
      </ListItem>
    </List>
  );
};

export { DishNew };
