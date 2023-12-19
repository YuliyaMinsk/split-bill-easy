import { Box, List } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddPayer } from '@/features/add-payer';
import { RemovePayer } from '@/features/remove-payer';

import { RootState } from '@/shared/store';
import { addPayer, editPayer, removePayer } from '@/shared/store/payer/payer-slice';

import { PayerListItem } from './view/payer-list-item';
import { PayerNewItem } from './view/payer-new-item';

const BLANK_NAME = '';

const PayerList: FC = () => {
  const dispatch = useDispatch();
  const payerList = useSelector((state: RootState) => state.payers);

  const [name, setName] = useState<string>(BLANK_NAME);

  const lastPayer = payerList.at(-1);
  const lastId = lastPayer ? lastPayer.id : '0';
  const newId = `${Number(lastId) + 1}`;

  const handleAdd = useCallback(() => {
    if (name.length > 0) {
      const newPayer = { id: newId, name };
      dispatch(addPayer(newPayer));
      setName(BLANK_NAME);
    }
  }, [name, newId, dispatch]);

  const handleRemove = (id: string) => {
    dispatch(removePayer(id));
  };

  const handlePayerChange = (id: string, newName: string) => {
    dispatch(editPayer({ id, name: newName }));
  };

  const handleNewPayerChange = (newName: string) => {
    setName(newName);
  };

  return (
    <Box sx={{ mt: '1rem', mb: '6rem' }}>
      <List>
        {payerList.map((payer) => (
          <PayerListItem
            key={payer.id}
            payer={payer}
            ActionComponent={<RemovePayer onRemove={() => handleRemove(payer.id)} />}
            onPayerChange={handlePayerChange}
          />
        ))}
      </List>
      <PayerNewItem
        key={payerList.length}
        payer={{ id: `${payerList.length}`, name: name }}
        onNewPayerChange={handleNewPayerChange}
        handleAdd={handleAdd}
        ActionComponent={<AddPayer onAdd={handleAdd} />}
      />
    </Box>
  );
};

export { PayerList };
