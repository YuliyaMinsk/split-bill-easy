import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';

import { DishNew } from '@/entities/dish/dish-new';
import { PayersForBill } from '@/entities/payer/payer-for-bill';

import { RootState } from '@/shared/store';
import { BillLine, Dish, PayersWithQuantity } from '@/shared/types';
import { addBillLine } from '@/shared/store/bill/bill-slice';
import { deepEqual } from '@/shared/utils';

const AddPointBill = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const payerList = useSelector((state: RootState) => state.payer);

  const blankBillLine = useMemo(
    () => ({
      dish: { id: '', name: '', price: 0, quantity: 0 },
      payers: payerList.map((payer) => ({ ...payer, isChecked: false, quantity: 0 })),
    }),
    [payerList],
  );

  const [billLine, setBillLine] = useState<BillLine>(blankBillLine);
  const [isDishValid, setIsDishValid] = useState<boolean>(true);
  const [isPayersValid, setIsPayersValid] = useState<boolean>(true);

  const isSaveButtonDisabled = !isDishValid || !isPayersValid;
  const isPayersDefault = useMemo(
    () => deepEqual(billLine.payers, blankBillLine.payers),
    [billLine.payers, blankBillLine],
  );

  const validateDish = useCallback((dish: Dish) => {
    const isValid = dish.name.trim() !== '' && dish.price > 0 && dish.quantity > 0;
    setIsDishValid(isValid);
  }, []);

  const validatePayers = useCallback((payers: PayersWithQuantity[]) => {
    const isValid = payers.some((payer) => payer.isChecked && payer.quantity > 0);
    setIsPayersValid(isValid);
  }, []);

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
      <DishNew
        onQuantityChange={recalculateQuantity}
        dish={billLine.dish}
        updateValue={handleUpdateDish}
        validateDish={validateDish}
      />
      <Typography variant="h6" component="h2" sx={{ ml: 2, mt: 2 }} gutterBottom>
        {t('Payers')}
      </Typography>
      <PayersForBill
        payerListWithQuantity={billLine.payers}
        totalQuantity={billLine.dish.quantity || 0}
        updateValue={handleUpdatePayerList}
        validatePayers={validatePayers}
        isDefault={isPayersDefault}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button size="large" variant="contained" onClick={handleSave} disabled={isSaveButtonDisabled}>
          {t('Save')}
        </Button>
      </Box>
    </Box>
  );
};

export { AddPointBill };
