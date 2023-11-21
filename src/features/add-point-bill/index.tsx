import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';

import { DishNew } from '@/entities/dish/dish-new';
import { PayersForBill } from '@/entities/payer/payer-for-bill';

import { RootState } from '@/shared/store';
import { BillLine, Dish, PayersWithQuantity } from '@/shared/types';
import { addBillLine } from '@/shared/store/bill/bill-slice';

const AddPointBill = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const payerList = useSelector((state: RootState) => state.payer);

  const blankBillLine = useCallback(
    () => ({
      dish: { id: '', name: '', price: 0, quantity: 0 },
      payers: payerList.map((payer) => ({ ...payer, isChecked: false, quantity: 0 })),
    }),
    [payerList],
  );

  const [billLine, setBillLine] = useState<BillLine>(blankBillLine);

  const handleSave = useCallback(() => {
    dispatch(addBillLine(billLine));
    setBillLine(blankBillLine);
  }, [dispatch, billLine, blankBillLine]);

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

  const recalculateQuantity = useCallback((quantity: number) => {
    setBillLine((prevBillLine) => ({ ...prevBillLine, dish: { ...prevBillLine.dish, quantity } }));
  }, []);

  return (
    <Box sx={{ mt: '1rem', ml: 0, mr: 0, mb: '6rem' }}>
      <DishNew onQuantityChange={recalculateQuantity} dish={billLine.dish} updateValue={handleUpdateDish} />
      <Typography variant="h6" component="h2" sx={{ ml: 2, mt: 2 }} gutterBottom>
        {t('Payers')}
      </Typography>
      <PayersForBill
        payerListWithQuantity={billLine.payers}
        totalQuantity={billLine.dish.quantity || 0}
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
