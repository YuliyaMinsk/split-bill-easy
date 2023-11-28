import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, ListItem, MenuItem, MenuProps, Select, SelectChangeEvent, Typography } from '@mui/material';

const percentages = Array.from({ length: 21 }, (_, i) => i * 5);

const customMenuProps: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: 200,
      overflow: 'auto',
    },
  },
};

type FieldWithPercentProps = {
  name: string;
  value: string;
  updateValue: (name: string, value: number) => void;
};

const FieldWithPercent = ({ name, value, updateValue }: FieldWithPercentProps): JSX.Element => {
  const { t } = useTranslation();
  const [percent, setPercent] = useState(value);

  const handleInputChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setPercent(event.target.value);
    updateValue(name, Number(event.target.value));
  };

  return (
    <ListItem key={name}>
      <Typography
        variant="body1"
        sx={{ width: '80%', display: 'inline-block', mr: 1, pb: 1, borderBottom: '1px solid rgba(0, 0, 0, 0.42)' }}
      >
        {t(name)}
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select id={`outlined-basic-${name}`} value={percent} onChange={handleInputChange} MenuProps={customMenuProps}>
          {percentages.map((percentItem) => (
            <MenuItem key={percentItem} value={percentItem.toString()}>
              {percentItem}%
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ListItem>
  );
};

export { FieldWithPercent };
