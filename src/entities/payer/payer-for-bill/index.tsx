import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PayersWithQuantity } from '@/shared/types';

import { countQuantity } from '../utils';

interface PayersForBillProps {
  payerListWithQuantity: PayersWithQuantity[];
  totalQuantity: number;
  updateValue: (payersWithQuantity: PayersWithQuantity[]) => void;
  validatePayers: (payersWithQuantity: PayersWithQuantity[]) => void;
  isDefault?: boolean;
}

const PayersForBill: FC<PayersForBillProps> = ({
  payerListWithQuantity,
  totalQuantity,
  updateValue,
  validatePayers,
  isDefault = false,
}) => {
  const { t } = useTranslation();
  const [payersWithQuantity, setPayersWithQuantity] = useState<PayersWithQuantity[]>(payerListWithQuantity);
  const [error, setError] = useState('');

  const updatePayersWithQuantity = (currentPayers: PayersWithQuantity[], quantity: number) => {
    const quantityPerPayer = countQuantity(currentPayers, quantity);
    return currentPayers.map((payer) => {
      return payer.isChecked ? { ...payer, quantity: quantityPerPayer } : { ...payer, quantity: 0 };
    });
  };

  const handleCheckChange = (payerId: string) => {
    const updatedPayers = payersWithQuantity.map((payer) =>
      payer.id === payerId ? { ...payer, isChecked: !payer.isChecked } : payer,
    );

    setPayersWithQuantity(updatePayersWithQuantity(updatedPayers, totalQuantity));
  };

  const handleQuantityChange = (event: React.ChangeEvent<EventTarget>, payerId: string) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const newQuantity = value === '' ? null : Number(value);

    setPayersWithQuantity(
      payersWithQuantity.map((payer) => (payer.id === payerId ? { ...payer, quantity: newQuantity } : payer)),
    );
  };

  useEffect(() => {
    const totalQuantityEntered = payersWithQuantity.reduce((sum, payer) => sum + Number(payer.quantity), 0);

    if (Math.abs(totalQuantityEntered - totalQuantity) > 0.001 && totalQuantity > 0) {
      setError(t('Error: Incorrect amount') as string);
    } else {
      setError('');
      updateValue(payersWithQuantity);
    }

    validatePayers(payersWithQuantity);
  }, [payersWithQuantity, t, totalQuantity, updateValue, validatePayers]);

  useEffect(() => {
    if (totalQuantity > 0) {
      setPayersWithQuantity((currentPayers) => updatePayersWithQuantity(currentPayers, totalQuantity));
    }
  }, [totalQuantity]);

  useEffect(() => {
    if (isDefault) {
      setPayersWithQuantity(payerListWithQuantity);
    }
  }, [isDefault, payerListWithQuantity]);

  return (
    <>
      <List>
        {payersWithQuantity.map((payer) => (
          <ListItem key={payer.id} sx={{ display: 'flex' }}>
            <ListItemIcon>
              <Checkbox onChange={() => handleCheckChange(payer.id)} checked={payer.isChecked} />
            </ListItemIcon>
            <ListItemText primary={payer.name} />
            <TextField
              sx={{ textAlign: 'right', mr: 1, width: '150px' }}
              id="outlined-basic"
              size="small"
              type="number"
              value={payer.quantity}
              onChange={(event) => handleQuantityChange(event, payer.id)}
              error={error !== ''}
            />
          </ListItem>
        ))}
      </List>
      <Typography
        variant="caption"
        display="block"
        sx={{ ml: 2 }}
        color={error !== '' ? 'error' : 'inherit'}
        gutterBottom
      >
        {error === '' ? t('Choose who bought this item') : error}
      </Typography>
    </>
  );
};

const MemoizedPayersForBill: FC<PayersForBillProps> = memo(PayersForBill);
export { MemoizedPayersForBill as PayersForBill };
