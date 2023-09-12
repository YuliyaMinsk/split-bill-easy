import { ListItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Payer } from '@shared/types';

type PayerListItemProps = {
  payer: Payer;
  ActionComponent: JSX.Element;
  onPayerChange?: (id: string, newValue: string) => void;
};

const PayerListItem = ({ payer, ActionComponent, onPayerChange }: PayerListItemProps): JSX.Element => {
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onPayerChange) {
      onPayerChange(payer.id, event.target.value);
    }
  };

  return (
    <ListItem key={payer.id}>
      <TextField
        id="outlined-basic"
        fullWidth
        sx={{ mr: 1 }}
        label={t('Name') || ''}
        value={payer.name}
        onChange={handleInputChange}
      />
      {ActionComponent}
    </ListItem>
  );
};

export { PayerListItem };
