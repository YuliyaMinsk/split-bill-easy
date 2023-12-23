import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store';
import { addPayer, editPayer, removePayer } from '@/shared/store/payer/payer-slice';

const usePayerList = () => {
  const dispatch = useDispatch();
  const payerList = useSelector((state: RootState) => state.payers);
  const [newPayerName, setNewPayerName] = useState('');

  const handleAdd = useCallback(() => {
    if (newPayerName) {
      const lastId = payerList.at(-1)?.id || '0';
      const newId = `${Number(lastId) + 1}`;
      dispatch(addPayer({ id: newId, name: newPayerName }));
      setNewPayerName('');
    }
  }, [newPayerName, payerList, dispatch]);

  const handleRemove = (id: string) => {
    dispatch(removePayer(id));
  };

  const handlePayerChange = (id: string, newName: string) => {
    dispatch(editPayer({ id, name: newName }));
  };

  const handleNewPayerKeyDown = (value: string) => {
    if (value) {
      setNewPayerName(value);
      handleAdd();
    }
  };

  return {
    payerList,
    newPayerName,
    setNewPayerName,
    handleAdd,
    handleRemove,
    handlePayerChange,
    handleNewPayerKeyDown,
  };
};

export { usePayerList };
