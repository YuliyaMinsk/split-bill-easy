import { List, ListItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DishNew = (): JSX.Element => {
  const { t } = useTranslation();

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
          fullWidth
          sx={{ mr: 1 }}
          label={t('Quantity') || ''}
          placeholder={t('Enter a quantity') || ''}
        />
      </ListItem>
    </List>
  );
};

export { DishNew };
