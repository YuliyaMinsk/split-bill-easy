import { Checkbox, List, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Payer } from '@/shared/types';

type PayerListForSplitBillProps = {
  payerList: Payer[];
};

const PayerListForSplitBill = ({ payerList }: PayerListForSplitBillProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <List>
      {payerList.map((payer) => (
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary={payer.name} />
          <TextField
            sx={{ mr: 1 }}
            id="outlined-basic"
            type="number"
            size="small"
            label={t('Quantity') || ''}
            placeholder={t('Enter a quantity') || ''}
          />
        </ListItem>
      ))}
    </List>
  );
};

export { PayerListForSplitBill };
