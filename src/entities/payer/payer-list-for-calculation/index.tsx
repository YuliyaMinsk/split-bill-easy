import { Box } from '@mui/material';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';

import { PayerItemCalculation } from './view/payer-item-calculation';

const PayerListForCalculation: FC = () => {
  const payerList = useSelector((state: RootState) => state.payers);

  return (
    <Box sx={{ mt: 1, ml: 2, mr: 2, mb: 4 }}>
      {payerList.map((payer) => (
        <PayerItemCalculation key={payer.id} currentPayer={payer} />
      ))}
    </Box>
  );
};

export { PayerListForCalculation };
