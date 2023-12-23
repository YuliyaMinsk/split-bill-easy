import { ListItem, TextField } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Payer } from '@shared/types';

interface PayerItemProps {
  payer: Payer;
  ActionComponent: ReactNode;
  onPayerChange: (newValue: string) => void;
  onEnterPress?: (value: string) => void;
}

const PayerItem: FC<PayerItemProps> = ({ payer, ActionComponent, onPayerChange, onEnterPress }) => {
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPayerChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnterPress) {
      onEnterPress((event.target as HTMLInputElement).value);
    }
  };

  return (
    <ListItem key={payer.id}>
      <TextField
        id={`payer-input-${payer.id}`}
        fullWidth
        sx={{ mr: 1 }}
        label={payer.id ? t('Name') : t('New name')}
        placeholder={payer.id ? '' : t('Enter a new name') || ''}
        value={payer.name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {ActionComponent}
    </ListItem>
  );
};

export { PayerItem };
