import styled from '@emotion/styled';
import { ListItem, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC, useState, MouseEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { FeeType } from '@/shared/types';

const StyledToggleButton = styled(ToggleButton)`
  min-width: 50px;
  font-size: 1.15rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

interface FieldWithTypeProps {
  name: string;
  value: string;
  feeType?: FeeType;
  updateValue: (name: string, value: number, feeType: FeeType) => void;
}

const FieldWithType: FC<FieldWithTypeProps> = ({ name, value, feeType, updateValue }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>(value);
  const [selectedFeeType, setSelectedFeeType] = useState<FeeType>(feeType || 'percentage');
  const currency = useSelector((state: RootState) => state.profile.currency);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(String(event.target.value || ''));
    updateValue(name, Number(event.target.value), selectedFeeType);
  };

  const handleFeeTypeChange = (_event: MouseEvent<HTMLElement>, newFeeType: FeeType) => {
    if (newFeeType !== null) {
      setSelectedFeeType(newFeeType);
      updateValue(name, Number(inputValue), newFeeType);
    }
  };

  useEffect(() => {
    setInputValue(String(value));
    setSelectedFeeType(feeType || 'percentage');
  }, [value, feeType]);

  return (
    <ListItem key={name}>
      <TextField
        fullWidth
        id={`outlined-basic-${name}`}
        value={inputValue}
        onChange={handleInputChange}
        type="number"
        label={t(name) || ''}
        placeholder={t(name) || ''}
        sx={{ mr: 2 }}
      />
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={selectedFeeType}
        onChange={handleFeeTypeChange}
        sx={{ height: '100%' }}
      >
        <StyledToggleButton value="percentage">%</StyledToggleButton>
        <StyledToggleButton value="fixed">{currency}</StyledToggleButton>
      </ToggleButtonGroup>
    </ListItem>
  );
};

export { FieldWithType };
