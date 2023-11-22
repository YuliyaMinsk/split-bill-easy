import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListItem, TextField, Typography } from '@mui/material';

import { Dish, DishFieldUpdate } from '@/shared/types';

import { executeOnKeyDown } from '../utils/execute-on-key-down';

type DishNewProps = {
  dish: Dish;
  onQuantityChange: (quantity: number) => void;
  updateValue: (dish: Dish) => void;
  validateDish: (dish: Dish) => void;
};

const DishNew = ({ dish, onQuantityChange, updateValue, validateDish }: DishNewProps): JSX.Element => {
  const { t } = useTranslation();
  const [newDish, setNewDish] = useState(dish);
  const [errors, setErrors] = useState<{ [key in keyof Dish]?: boolean }>({});

  const validateField = (field: keyof Dish): boolean => {
    switch (field) {
      case 'name':
        return !newDish.name.trim();
      case 'price':
        return !newDish.price;
      case 'quantity':
        return !newDish.quantity;
      default:
        return false;
    }
  };

  const handleBlur = (field: keyof Dish) => {
    setErrors({ ...errors, [field]: validateField(field) });
  };

  const getErrorMessage = (): string => {
    const errorMessages = [];
    if (errors.name) errorMessages.push(t('Item is required'));
    if (errors.price) errorMessages.push(t('Price is required'));
    if (errors.quantity) errorMessages.push(t('Quantity is required'));

    return errorMessages.join(', ');
  };

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
    if (newDish.quantity !== dish.quantity) {
      setNewDish(dish);
    }
  }, [dish, newDish.quantity]);

  useEffect(() => {
    validateDish(newDish);
    updateValue(newDish);
  }, [newDish, updateValue, validateDish]);

  return (
    <>
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
            onKeyDown={(e) => executeOnKeyDown(e, handleInputChange)}
            onBlur={() => handleBlur('name')}
            error={errors.name}
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
            onKeyDown={(e) => executeOnKeyDown(e, handleInputChange)}
            onBlur={() => handleBlur('price')}
            error={errors.price}
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
            onKeyDown={(e) => executeOnKeyDown(e, handleInputChange)}
            onBlur={() => handleBlur('quantity')}
            error={errors.quantity}
          />
        </ListItem>
      </List>
      <Typography
        variant="caption"
        display="block"
        sx={{ ml: 2 }}
        color={Object.values(errors).some((e) => e) ? 'error' : 'inherit'}
        gutterBottom
      >
        {Object.values(errors).some((e) => e) ? getErrorMessage() : ''}
      </Typography>
    </>
  );
};

const MemoizedDishNew: React.FC<DishNewProps> = memo(DishNew);
export { MemoizedDishNew as DishNew };
