import { ListItem, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Payer } from '@shared/types';

type PayerListItemProps = {
  payer: Payer;
  ActionComponent: JSX.Element;
  onNewPayerChange: (newName: string) => void;
  handleAdd: () => void;
};

const PayerNewItem = ({ payer, ActionComponent, onNewPayerChange, handleAdd }: PayerListItemProps): JSX.Element => {
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNewPayerChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (value) {
      onNewPayerChange(value);
      handleAdd();
    }
  };

  return (
    <ListItem key={payer.id}>
      <TextField
        id="outlined-basic"
        fullWidth
        sx={{ mr: 1 }}
        label={t('New name') || ''}
        placeholder={t('Enter a new name') || ''}
        value={payer.name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {ActionComponent}
    </ListItem>
  );
};

export { PayerNewItem };
