import { useState } from 'react';

import { AddPayer } from '@features/add-payer';
import { RemovePayer } from '@features/remove-payer';

import { PayerList } from '@entities/payer/ui/payer-list';

import { Payer } from '@shared/types';

const payersFake = [
  {
    id: 'item-1',
    name: 'Сергей',
  },
  {
    id: 'item-2',
    name: 'Айдана',
  },
  {
    id: 'item-3',
    name: 'Марат',
  },
  {
    id: 'item-4',
    name: 'Алихан',
  },
];

const SetPayers = (): JSX.Element => {
  const [payerList, setPayerList] = useState<Payer[]>(payersFake);
  const [newNamePayer, setNewNamePayer] = useState<string>('');

  const handleAdd = () => {
    if (newNamePayer !== '') {
      const lastId = payerList.length ? payerList[payerList.length - 1].id.split('-')[1] : 0;
      const newPayer = { id: `item-${Number(lastId) + 1}`, name: newNamePayer };
      console.log(newPayer);
      setPayerList([...payerList, newPayer]);
      setNewNamePayer('');
    }
  };

  const handleRemove = (index: number) => () => {
    setPayerList(payerList.filter((_, i) => i !== index));
  };

  const handleNewPayerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNamePayer(event.target.value);
  };

  const handlePayerChange = (index: number, newValue: string) => {
    setPayerList(payerList.map((payer, i) => (i === index ? { ...payer, name: newValue } : payer)));
  };

  return (
    <PayerList
      payerList={payerList}
      AddComponent={<AddPayer onAdd={handleAdd} />}
      RemoveComponent={(index) => <RemovePayer onRemove={handleRemove(index)} />}
      newPayer={newNamePayer}
      onNewPayerChange={handleNewPayerChange}
      onPayerChange={handlePayerChange}
    />
  );
};

export { SetPayers };
