import { useState } from 'react';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Payer } from '@/shared/types';

type PayerListForSplitBillProps = {
  payerList: Payer[];
  totalQuantity: number;
};

const PayerListForSplitBill = ({ payerList, totalQuantity }: PayerListForSplitBillProps): JSX.Element => {
  const { t } = useTranslation();
  const [checkedPayers, setCheckedPayers] = useState<string[]>([]);

  const handleCheckChange = (payerId: string) => {
    const isChecked = checkedPayers.includes(payerId);
    if (isChecked) {
      setCheckedPayers(checkedPayers.filter((id) => id !== payerId));
    } else {
      setCheckedPayers([...checkedPayers, payerId]);
    }
  };

  const quantityPerPayer = checkedPayers.length ? Math.round((totalQuantity / checkedPayers.length) * 100) / 100 : 0;

  return (
    <List>
      {payerList.map((payer) => (
        <ListItem key={payer.id}>
          <ListItemIcon>
            <Checkbox onChange={() => handleCheckChange(payer.id)} />
          </ListItemIcon>
          <ListItemText primary={payer.name} />
          <TextField
            sx={{ mr: 1 }}
            id="outlined-basic"
            type="number"
            size="small"
            label={t('Quantity') || ''}
            placeholder={t('Enter a quantity') || ''}
            value={checkedPayers.includes(payer.id) ? quantityPerPayer : 0}
          />
        </ListItem>
      ))}
    </List>
  );
};

export { PayerListForSplitBill };
