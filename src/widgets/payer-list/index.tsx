import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, List } from '@mui/material';

import { AddPayer } from '@/features/add-payer';
import { RemovePayer } from '@/features/remove-payer';

import { RootState } from '@/shared/store';
import { addPayer, editPayer, removePayer } from '@/shared/store/payer/payer-slice';

import { PayerListItem } from './view/payer-list-item';
import { PayerNewItem } from './view/payer-new-item';

const BLANK_NAME = '';

const PayerList = (): JSX.Element => {
  const dispatch = useDispatch();
  const payerList = useSelector((state: RootState) => state.payer);

  const [name, setName] = useState<string>(BLANK_NAME);

  const lastId = payerList.length ? payerList[payerList.length - 1].id : '0';

  const handleAdd = useCallback(() => {
    if (name.length > 0) {
      const newPayer = { id: `${Number(lastId) + 1}`, name };
      dispatch(addPayer(newPayer));
      setName(BLANK_NAME);
    }
  }, [name, lastId, dispatch]);

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
