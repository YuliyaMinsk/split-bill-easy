import { Box, List } from '@mui/material';
import { FC } from 'react';

import { AddPayer } from '@/features/add-payer';
import { RemovePayer } from '@/features/remove-payer';

import { usePayerList } from './hooks';
import { PayerItem } from './view/payer-item';

const PayerList: FC = () => {
  const {
    payerList,
    newPayerName,
    setNewPayerName,
    handleAdd,
    handleRemove,
    handlePayerChange,
    handleNewPayerKeyDown,
  } = usePayerList();

  return (
    <Box sx={{ mt: '1rem', mb: '6rem' }}>
      <List>
        {payerList.map((payer) => (
          <PayerItem
            key={payer.id}
            payer={payer}
            ActionComponent={<RemovePayer onRemove={() => handleRemove(payer.id)} />}
            onPayerChange={(newValue) => handlePayerChange(payer.id, newValue)}
          />
        ))}
        <PayerItem
          payer={{ id: '', name: newPayerName }}
          ActionComponent={<AddPayer onAdd={handleAdd} />}
          onPayerChange={setNewPayerName}
          onEnterPress={handleNewPayerKeyDown}
        />
      </List>
    </Box>
  );
};

export { PayerList };
