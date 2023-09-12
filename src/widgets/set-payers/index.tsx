import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '@mui/material';

import { AddPayer } from '@/features/add-payer';
import { RemovePayer } from '@/features/remove-payer';

import { RootState } from '@/shared/store';
import { addPayer, editPayer, removePayer } from '@/shared/store/payer/payer-slice';

import { PayerListItem } from './view/payer-list-item';

const SetPayers = (): JSX.Element => {
  const [newNamePayer, setNewNamePayer] = useState<string>('');

  const payerList = useSelector((state: RootState) => state.payer);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newNamePayer.length > 0) {
      const lastId = payerList.length ? payerList[payerList.length - 1].id.split('-')[1] : 0;
      const newPayer = { id: `item-${Number(lastId) + 1}`, name: newNamePayer };
      dispatch(addPayer(newPayer));
      setNewNamePayer('');
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removePayer(id));
  };

  const handlePayerChange = (id: string, newName: string) => {
    dispatch(editPayer({ id, name: newName }));
  };

  const handleNewPayerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNamePayer(event.target.value);
  };

  return (
    <List>
      {payerList.map((payer) => (
        <PayerListItem
          key={payer.id}
          payer={payer}
          ActionComponent={<RemovePayer onRemove={() => handleRemove(payer.id)} />}
          onPayerChange={handlePayerChange}
        />
      ))}
      <PayerListItem
        key={'new-payer'}
        payer={{ id: 'new-payer', name: newNamePayer }}
        onNewPayerChange={handleNewPayerChange}
        ActionComponent={<AddPayer onAdd={handleAdd} />}
      />
    </List>
  );
};

export { SetPayers };
