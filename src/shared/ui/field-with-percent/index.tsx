import { Grid, ListItem, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { FeeType } from '@/shared/types';

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
  const currency = useSelector((state: RootState) => state.profile.currency);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    updateValue(name, Number(event.target.value), selectedFeeType);
  };

  const handleFeeTypeChange = (_event: MouseEvent<HTMLElement>, newFeeType: FeeType) => {
    if (newFeeType !== null) {
      setSelectedFeeType(newFeeType);
      updateValue(name, Number(inputValue), newFeeType);
    }
  };

  return (
    <ListItem key={name}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
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
        <Grid item xs={2}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={selectedFeeType}
            onChange={handleFeeTypeChange}
            sx={{ height: '100%' }}
          >
            <ToggleButton
              value="percentage"
              sx={{ minWidth: '50px', fontSize: '1.15rem', border: '1px solid rgba(0, 0, 0, 0.20)' }}
            >
              %
            </ToggleButton>
            <ToggleButton
              value="fixed"
              sx={{ minWidth: '50px', fontSize: '1.15rem', border: '1px solid rgba(0, 0, 0, 0.20)' }}
            >
              {currency}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export { FieldWithPercent };
