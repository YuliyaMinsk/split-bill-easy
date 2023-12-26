import { Box } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { applyServices, calculateDishCosts, calculateTotalBill } from '@/shared/utils';

import { PayerItemCalculation } from './view/payer-item-calculation';

const PayerListForCalculation: FC = () => {
  const payerList = useSelector((state: RootState) => state.payers);
  const billList = useSelector((state: RootState) => state.bill.billList);
  const services = useSelector((state: RootState) => state.services);

  let detailedTotals = calculateDishCosts(payerList, billList);
  detailedTotals = applyServices(detailedTotals, services);
  const totalBill = calculateTotalBill(detailedTotals);

  return (
    <Box sx={{ mt: 1, ml: 2, mr: 2, mb: 10 }}>
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
