import { ListItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

type FieldWithPercentProps = {
  name: string;
  value: number;
};

const FieldWithPercent = ({ name, value }: FieldWithPercentProps): JSX.Element => {
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <ListItem key={name}>
      <TextField
        id="outlined-basic"
        fullWidth
        sx={{ mr: 1 }}
        label={t('Name') || ''}
        value={value}
        onChange={handleInputChange}
      />
      <TextField
        id="outlined-basic"
        fullWidth
        sx={{ mr: 1 }}
        label={t('Name') || ''}
        value={value}
        onChange={handleInputChange}
      />
    </ListItem>
  );
};

export { FieldWithPercent };
