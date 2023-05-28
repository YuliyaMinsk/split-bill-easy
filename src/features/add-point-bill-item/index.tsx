import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Typography } from '@mui/material';

import { DishNew } from '@/entities/dish/dish-new';
import { PayerListForSplitBill } from '@/entities/payer/payer-list-for-split-bill';
import { RootState } from '@/shared/store';

const AddPointBill = (): JSX.Element => {
  const { t } = useTranslation();
  const [totalQuantity, setTotalQuantity] = useState(0);

  const payerList = useSelector((state: RootState) => state.payer);
  const dispatch = useDispatch();

  return (
    <Container>
      <DishNew onQuantityChange={setTotalQuantity} />
      <Typography variant="h6" component="h2" sx={{ ml: 2, mt: 2 }} gutterBottom>
        {t('Payers')}
      </Typography>
      <PayerListForSplitBill payerList={payerList} totalQuantity={totalQuantity} />
      <Typography variant="caption" display="block" sx={{ ml: 2 }} gutterBottom>
        {t('Choose who bought this item')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button size="large" variant="contained">
          {t('Save')}
        </Button>
      </Box>
    </Container>
  );
};

export { AddPointBill };
