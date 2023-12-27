import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { applyServices, calculateDishCosts } from '@/shared/utils';

import { PayerItemCalculation } from './view/payer-item-calculation';

const PayerListForCalculation: FC = () => {
  const { t } = useTranslation();
  const payerList = useSelector((state: RootState) => state.payers);
  const billList = useSelector((state: RootState) => state.bill.billList);
  const services = useSelector((state: RootState) => state.services);
  const currency = useSelector((state: RootState) => state.profile.currency);

  let detailedTotals = calculateDishCosts(payerList, billList);
  detailedTotals = applyServices(detailedTotals, services);
  const total = detailedTotals.reduce((acc, detail) => acc + detail.total, 0);

  return (
    <Box sx={{ mt: 1, ml: 2, mr: 2, mb: 10 }}>
      <Typography variant="h5" sx={{ color: 'text.secondary', m: 1, textAlign: 'right' }}>
        {t('Total') + ':'} {total} {currency}
      </Typography>

      {payerList.map((payer) => {
        const payerDetail = detailedTotals.find((detail) => detail.id === payer.id);
        return payerDetail ? (
          <PayerItemCalculation key={payer.id} currentPayer={payer} payerDetail={payerDetail} />
        ) : null;
      })}
    </Box>
  );
};

export { PayerListForCalculation };
