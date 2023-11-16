import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, TextField } from '@mui/material';

import { Dish, DishFieldUpdate } from '@/shared/types';

import { handleKeyDown } from './utils/handle-key-down';

type DishNewProps = {
  dish: Dish;
  onQuantityChange: (quantity: number) => void;
  updateValue: (dish: Dish) => void;
};

const DishNew = ({ dish, onQuantityChange, updateValue }: DishNewProps): JSX.Element => {
  const { t } = useTranslation();
  const [newDish, setNewDish] = useState(dish);

  useEffect(() => {
    setNewDish(dish);
  }, [dish]);

  const handleInputChange = ({ field, value }: DishFieldUpdate) => {
    const updatedValue = field === 'quantity' ? parseInt(value, 10) : value;
    const updatedDish = { ...newDish, [field]: updatedValue };
    setNewDish(updatedDish);
    if (field === 'quantity') {
      onQuantityChange(parseInt(value, 10));
    }
  };

  useEffect(() => {
    updateValue(newDish);
  }, [newDish, updateValue]);

  return (
    <List>
      <ListItem>
        <TextField
          id="item-name"
          name="name"
          fullWidth
          label={t('Item') || ''}
          placeholder={t('Enter an item') || ''}
          value={newDish.name}
          onChange={(e) => handleInputChange({ field: 'name', value: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e, handleInputChange)}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="item-cost"
          name="price"
          fullWidth
          label={t('Item cost') || ''}
          placeholder={t('Enter an item cost') || ''}
          value={newDish.price ? newDish.price.toString() : ''}
          onChange={(e) => handleInputChange({ field: 'price', value: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e, handleInputChange)}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="item-quantity"
          name="quantity"
          type="number"
          fullWidth
          label={t('Quantity') || ''}
          placeholder={t('Enter a quantity') || ''}
          value={newDish.quantity ? newDish.quantity.toString() : ''}
          onChange={(e) => handleInputChange({ field: 'quantity', value: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e, handleInputChange)}
        />
      </ListItem>
    </List>
  );
};

export { DishNew };
