import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';

import { Payer, PayersWithQuantity } from '@/shared/types';

type PayerListForSplitBillProps = {
  payerList: Payer[];
  totalQuantity: number;
};

const PayerListForSplitBill = ({ payerList, totalQuantity }: PayerListForSplitBillProps): JSX.Element => {
  const { t } = useTranslation();
  const [payersWithQuantity, setPayersWithQuantity] = useState<PayersWithQuantity[]>(
    payerList.map((payer) => ({ ...payer, isChecked: false, quantity: 0 })),
  );
  const [error, setError] = useState('');

  useEffect(() => {
    const totalQuantityEntered = payersWithQuantity.reduce((sum, payer) => sum + payer.quantity, 0);
    console.log('totalQuantityEntered:', totalQuantityEntered, 'totalQuantity:', totalQuantity);
    if (Math.abs(totalQuantityEntered - totalQuantity) > 0.015) {
      setError(t('Error: Incorrect amount') as string);
    } else {
      setError('');
    }
  }, [payersWithQuantity, t, totalQuantity]);

  const handleCheckChange = (payerId: string) => {
    const updatedPayers = payersWithQuantity.map((payer) =>
      payer.id === payerId ? { ...payer, isChecked: !payer.isChecked } : payer,
    );

    const checkedPayers = updatedPayers.filter((payer) => payer.isChecked);
    const quantityPerPayer = checkedPayers.length ? Math.round((totalQuantity / checkedPayers.length) * 100) / 100 : 0;

    setPayersWithQuantity(
      updatedPayers.map((payer) => {
        if (payer.isChecked) {
          return { ...payer, quantity: quantityPerPayer };
        }
        return { ...payer, quantity: 0 };
      }),
    );
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, payerId: string) => {
    const newQuantity = Number(event.target.value);

    setPayersWithQuantity(
      payersWithQuantity.map((payer) => (payer.id === payerId ? { ...payer, quantity: newQuantity } : payer)),
    );
  };

  console.log('PayerListForSplitBill payersWithQuantity:', payersWithQuantity);

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

export { PayerListForSplitBill };
