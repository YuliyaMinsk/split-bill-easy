import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';

import { PayersWithQuantity } from '@/shared/types';

// TODO: move functions to utils
const filterPayers = (payerListWithQuantity: PayersWithQuantity[]): PayersWithQuantity[] =>
  payerListWithQuantity.filter((payer) => payer.isChecked);

const countQuantityPerPayer = (payerListWithQuantity: PayersWithQuantity[], totalQuantity: number): number => {
  const checkedPayers = filterPayers(payerListWithQuantity);
  return checkedPayers.length ? Math.round((totalQuantity / checkedPayers.length) * 100) / 100 : 0;
};

type PayersForBillProps = {
  payerListWithQuantity: PayersWithQuantity[];
  totalQuantity: number;
  updateValue: (payersWithQuantity: PayersWithQuantity[]) => void;
};

const PayersForBill = ({ payerListWithQuantity, totalQuantity, updateValue }: PayersForBillProps): JSX.Element => {
  const { t } = useTranslation();
  const [payersWithQuantity, setPayersWithQuantity] = useState<PayersWithQuantity[]>(payerListWithQuantity);
  const [error, setError] = useState('');

  const handleCheckChange = (payerId: string) => {
    const updatedPayers = payersWithQuantity.map((payer) =>
      payer.id === payerId ? { ...payer, isChecked: !payer.isChecked } : payer,
    );

    const quantityPerPayer = countQuantityPerPayer(updatedPayers, totalQuantity);
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

    if (Math.abs(totalQuantityEntered - totalQuantity) > 0.015 && totalQuantity > 0) {
      setError(t('Error: Incorrect amount') as string);
    } else {
      setError('');
      updateValue(payersWithQuantity);
    }
  }, [payersWithQuantity, t, totalQuantity, updateValue]);

  return (
    <>
      <List>
        {payersWithQuantity.map((payer) => (
          <ListItem key={payer.id} sx={{ display: 'flex' }}>
            <ListItemIcon>
              <Checkbox onChange={() => handleCheckChange(payer.id)} value={payer.isChecked} />
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

export { PayersForBill };
