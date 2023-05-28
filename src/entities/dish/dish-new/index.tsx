import { List, ListItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

type DishNewProps = {
  onQuantityChange: (quantity: number) => void;
};

const DishNew = ({ onQuantityChange }: DishNewProps): JSX.Element => {
  const { t } = useTranslation();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQuantityChange(Number(event.target.value));
  };

  return (
    <List>
      <ListItem>
        <TextField
          id="outlined-basic"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Item') || ''}
          placeholder={t('Enter an item') || ''}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="outlined-basic"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Item cost') || ''}
          placeholder={t('Enter an item cost') || ''}
        />
      </ListItem>
      <ListItem>
        <TextField
          id="outlined-basic"
          type="number"
          fullWidth
          sx={{ mr: 1 }}
          label={t('Quantity') || ''}
          placeholder={t('Enter a quantity') || ''}
          onChange={handleQuantityChange}
        />
      </ListItem>
    </List>
  );
};

export { DishNew };
