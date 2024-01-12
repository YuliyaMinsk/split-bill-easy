import { List, Typography } from '@mui/material';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Dish, DishFieldUpdate } from '@/shared/types';

import { ErrorDish, createFieldConfig } from './models';
import { getErrorMessage } from './utils';
import { DishTextField } from './views/dish-text-field';

type FieldConfigKeys = 'name' | 'price' | 'quantity';

interface DishNewProps {
  dish: Dish;
  onQuantityChange: (quantity: number) => void;
  updateValue: (dish: Dish) => void;
  validateDish: (dish: Dish) => void;
}

const DishNew: FC<DishNewProps> = ({ dish, onQuantityChange, updateValue, validateDish }) => {
  const { t } = useTranslation();
  const [newDish, setNewDish] = useState(dish);
  const [errors, setErrors] = useState<ErrorDish>({});

  const fieldConfig = useMemo(() => createFieldConfig(t), [t]);

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
        {Object.keys(newDish).map((key) => {
          if (key in fieldConfig) {
            const fieldKey = key as FieldConfigKeys;
            return (
              <DishTextField
                key={fieldKey}
                fieldKey={fieldKey}
                config={fieldConfig[fieldKey]}
                value={newDish[fieldKey]?.toString() || ''}
                handleInputChange={handleInputChange}
                handleBlur={() => handleBlur(fieldKey)}
                error={errors[fieldKey] || false}
              />
            );
          }
          return null;
        })}
      </List>
      <Typography
        variant="caption"
        display="block"
        sx={{ ml: 2 }}
        color={Object.values(errors).some((e) => e) ? 'error' : 'inherit'}
        gutterBottom
      >
        {Object.values(errors).some((e) => e) ? getErrorMessage(errors, t) : ''}
      </Typography>
    </>
  );
};

const MemoizedDishNew: FC<DishNewProps> = memo(DishNew);
export { MemoizedDishNew as DishNew };
