import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';

import { DishNew } from '@/entities/dish/dish-new';
import { PayerListForSplitBill } from '@/entities/payer/payer-list-for-split-bill';

import { RootState } from '@/shared/store';
import { BillLine, Dish, PayersWithQuantity } from '@/shared/types';
import { addBillLine } from '@/shared/store/bill/bill-slice';

const AddPointBill = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const payerList = useSelector((state: RootState) => state.payer);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [billLine, setBillLine] = useState<BillLine>({
    dish: { id: '', name: '', price: 0, quantity: 0 },
    payers: payerList.map((payer) => ({ ...payer, isChecked: false, quantity: 0 })),
  });

  const handleSave = () => {
    dispatch(addBillLine(billLine));
    setBillLine({
      dish: { id: '', name: '', price: 0, quantity: 0 },
      payers: [],
    });
  };

  const handleUpdatePayerList = useCallback((payersWithQuantity: PayersWithQuantity[]) => {
    setBillLine((prevBillLine) => ({
      ...prevBillLine,
      payers: payersWithQuantity,
    }));
  }, []);

  const handleUpdateDish = useCallback((newDish: Dish) => {
    setBillLine((prevBillLine) => ({
      ...prevBillLine,
      dish: newDish,
    }));
  }, []);

  useEffect(() => {
    setTotalQuantity(billLine.dish.quantity);
  }, [billLine.dish.quantity]);

  //console.log('billLine:', billLine);

  return (
    <Box sx={{ mt: '1rem', ml: 0, mr: 0, mb: '6rem' }}>
      <DishNew onQuantityChange={setTotalQuantity} dish={billLine.dish} updateValue={handleUpdateDish} />
      <Typography variant="h6" component="h2" sx={{ ml: 2, mt: 2 }} gutterBottom>
        {t('Payers')}
      </Typography>
      <PayerListForSplitBill
        payerList={billLine.payers}
        totalQuantity={totalQuantity}
        updateValue={handleUpdatePayerList}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button size="large" variant="contained" onClick={handleSave}>
          {t('Save')}
        </Button>
      </Box>
    </Box>
  );
};

export { AddPointBill };
