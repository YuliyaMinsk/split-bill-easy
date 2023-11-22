import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';

import { PayersWithQuantity } from '@/shared/types';

import { countQuantity } from '../utils';

type PayersForBillProps = {
  payerListWithQuantity: PayersWithQuantity[];
  totalQuantity: number;
  updateValue: (payersWithQuantity: PayersWithQuantity[]) => void;
  validatePayers: (payersWithQuantity: PayersWithQuantity[]) => void;
  isDefault?: boolean;
};

const PayersForBill = ({
  payerListWithQuantity,
  totalQuantity,
  updateValue,
  validatePayers,
  isDefault = false,
}: PayersForBillProps): JSX.Element => {
  const { t } = useTranslation();
  const [payersWithQuantity, setPayersWithQuantity] = useState<PayersWithQuantity[]>(payerListWithQuantity);
  const [error, setError] = useState('');

  const handleCheckChange = (payerId: string) => {
    const updatedPayers = payersWithQuantity.map((payer) =>
      payer.id === payerId ? { ...payer, isChecked: !payer.isChecked } : payer,
    );

    const quantityPerPayer = countQuantity(updatedPayers, totalQuantity);
    const finalPayers = updatedPayers.map((payer) => {
      return payer.isChecked ? { ...payer, quantity: quantityPerPayer } : { ...payer, quantity: 0 };
    });

    setPayersWithQuantity(finalPayers);
  };

  const handleQuantityChange = (event: React.ChangeEvent<EventTarget>, payerId: string) => {
    const target = event.target as HTMLInputElement;
    const newQuantity = Number(target.value);

    setPayersWithQuantity(
      payersWithQuantity.map((payer) => (payer.id === payerId ? { ...payer, quantity: newQuantity } : payer)),
    );
  };

  useEffect(() => {
    const totalQuantityEntered = payersWithQuantity.reduce((sum, payer) => sum + payer.quantity, 0);

    if (Math.abs(totalQuantityEntered - totalQuantity) > 0.014 && totalQuantity > 0) {
      setError(t('Error: Incorrect amount') as string);
    } else {
      setError('');
      updateValue(payersWithQuantity);
    }

    validatePayers(payersWithQuantity);
  }, [payersWithQuantity, t, totalQuantity, updateValue, validatePayers]);

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

const MemoizedPayersForBill: React.FC<PayersForBillProps> = memo(PayersForBill);
export { MemoizedPayersForBill as PayersForBill };
