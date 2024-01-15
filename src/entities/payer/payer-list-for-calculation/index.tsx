import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { StyledBox } from '@/shared/styles';
import { applyServices, calculateDishCosts, roundUp } from '@/shared/utils';

import { PayerItemCalculation } from './view/payer-item-calculation';

const PayerListForCalculation: FC = () => {
  const { t } = useTranslation();
  const payerList = useSelector((state: RootState) => state.payers);
  const billList = useSelector((state: RootState) => state.bill.billList);
  const services = useSelector((state: RootState) => state.services);
  const currency = useSelector((state: RootState) => state.profile.currency);

  if (billList.length === 0) {
    return (
      <StyledBox>
        <p>{t('There are no items in your bill. Fill the form on Items page to add them')}</p>
      </StyledBox>
    );
  }

  const detailedTotals = calculateDishCosts(payerList, billList);
  const detailedTotalsWithServices = applyServices(detailedTotals, services);
  const total = detailedTotalsWithServices.reduce((acc, detail) => {
    const total = Math.ceil(detail.total * 100) / 100;
    return acc + total;
  }, 0);

  return (
    <Box sx={{ mt: 1, ml: 2, mr: 2, mb: 10 }}>
      <Typography variant="h5" sx={{ color: 'text.secondary', m: 1, textAlign: 'right' }}>
        {t('Total') + ':'} {roundUp(total, 2)} {currency}
      </Typography>

      {payerList.map((payer) => {
        const payerDetail = detailedTotalsWithServices.find((detail) => detail.id === payer.id);
        return payerDetail ? (
          <PayerItemCalculation key={payer.id} currentPayer={payer} payerDetail={payerDetail} />
        ) : null;
      })}
    </Box>
  );
};

export { PayerListForCalculation };
