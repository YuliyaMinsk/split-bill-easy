import { ListItem, TextField } from '@mui/material';
import { FC } from 'react';

import { Dish, DishFieldUpdate } from '@/shared/types';

import { ConfigKeys } from '../../models';

interface DishTextFieldProps {
  fieldKey: keyof Dish;
  config: ConfigKeys;
  value: string;
  handleInputChange: (update: DishFieldUpdate) => void;
  handleBlur: () => void;
  error: boolean;
}

const DishTextField: FC<DishTextFieldProps> = ({ fieldKey, config, value, handleInputChange, handleBlur, error }) => {
  return (
    <ListItem key={fieldKey}>
      <TextField
        id={`item-${fieldKey}`}
        name={fieldKey}
        fullWidth
        label={config.label}
        placeholder={config.placeholder}
        type={config.type}
        value={value === '0' ? '' : value}
        onChange={(e) => handleInputChange({ field: fieldKey, value: e.target.value })}
        onBlur={handleBlur}
        error={error}
      />
    </ListItem>
  );
};

export { DishTextField };
