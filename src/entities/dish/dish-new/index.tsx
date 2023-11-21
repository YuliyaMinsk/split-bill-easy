import { memo, useEffect, useState } from 'react';
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
    if (newDish.quantity !== dish.quantity) {
      setNewDish(dish);
    }
  }, [dish, newDish.quantity]);

  const handleInputChange = ({ field, value }: DishFieldUpdate) => {
    if (field === 'quantity') {
      if (value === '') {
        setNewDish({ ...newDish, [field]: 0 });
        onQuantityChange(0);
      } else {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue)) {
          setNewDish({ ...newDish, [field]: parsedValue });
          onQuantityChange(parsedValue);
        }
      }
    } else {
      setNewDish({ ...newDish, [field]: value });
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

const MemoizedDishNew: React.FC<DishNewProps> = memo(DishNew);
export { MemoizedDishNew as DishNew };
