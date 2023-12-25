import { FormControl, Grid, ListItem, MenuItem, MenuProps, Select, SelectChangeEvent, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FeeType } from '@/shared/types';

const customMenuProps: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: 195,
      overflowY: 'auto',
    },
  },
  disableScrollLock: true,
};

type FieldWithPercentProps = {
  name: string;
  value: string;
  feeType?: FeeType;
  updateValue: (name: string, value: number, feeType: FeeType) => void;
};

const FieldWithPercent: FC<FieldWithPercentProps> = ({ name, value, feeType, updateValue }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>(value);
  const [selectedFeeType, setSelectedFeeType] = useState<FeeType>(feeType || 'percentage');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    updateValue(name, Number(event.target.value), selectedFeeType);
  };

  const handleFeeTypeChange = (event: SelectChangeEvent<FeeType>) => {
    setSelectedFeeType(event.target.value as FeeType);
    updateValue(name, Number(inputValue), event.target.value as FeeType);
  };

  return (
    <ListItem key={name}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id={`outlined-basic-${name}`}
            value={inputValue}
            onChange={handleInputChange}
            type="number"
            label={t(name) || ''}
            placeholder={t(name) || ''}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <Select
              labelId={`fee-type-label-${name}`}
              id={`fee-type-select-${name}`}
              value={selectedFeeType}
              onChange={handleFeeTypeChange}
              MenuProps={customMenuProps}
            >
              <MenuItem value="percentage">{t('Percentage')}</MenuItem>
              <MenuItem value="fixed">{t('Fixed')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export { FieldWithPercent };
