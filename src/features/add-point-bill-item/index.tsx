import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store';

import { DishNew } from '@/entities/dish/dish-new';
import { PayerListForSplitBill } from '@/entities/payer/payer-list-for-split-bill';
import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AddPointBill = (): JSX.Element => {
  const { t } = useTranslation();

  const payerList = useSelector((state: RootState) => state.payer);
  const dispatch = useDispatch();

  return (
    <Container>
      <DishNew />
      <Typography variant="h6" component="h2" sx={{ ml: 2, mt: 2 }} gutterBottom>
        {t('Payers')}
      </Typography>
      <PayerListForSplitBill payerList={payerList} />
      <Typography variant="caption" display="block" sx={{ ml: 2 }} gutterBottom>
        {t('Choose who bought this item')}
      </Typography>
    </Container>
  );
};

export { AddPointBill };
