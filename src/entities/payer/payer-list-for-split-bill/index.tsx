import { useState } from 'react';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { Payer } from '@/shared/types';

type PayerListForSplitBillProps = {
  payerList: Payer[];
  totalQuantity: number;
};

const PayerListForSplitBill = ({ payerList, totalQuantity }: PayerListForSplitBillProps): JSX.Element => {
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
        <ListItem key={payer.id} sx={{ display: 'flex' }}>
          <ListItemIcon>
            <Checkbox onChange={() => handleCheckChange(payer.id)} />
          </ListItemIcon>
          <ListItemText primary={payer.name} />
          {/* <TextField
            sx={{ mr: 1, width: '100px' }}
            id="outlined-basic"
            size="small"
            value={checkedPayers.includes(payer.id) ? quantityPerPayer : 0}
          /> */}
          <ListItemText
            primaryTypographyProps={{ fontSize: '18px' }}
            primary={checkedPayers.includes(payer.id) ? quantityPerPayer : 0}
            sx={{ textAlign: 'right', mr: 1 }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export { PayerListForSplitBill };
