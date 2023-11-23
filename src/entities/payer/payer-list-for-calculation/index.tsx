import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { RootState } from '@/shared/store';

import { PayerItemCalculation } from './view/payer-item-calculation';

const PayerListForCalculation = (): JSX.Element => {
  const payerList = useSelector((state: RootState) => state.payer);

  return (
    <Box sx={{ mt: '1rem', ml: 1, mr: 1, mb: '2rem' }}>
      {payerList.map((payer) => (
        <PayerItemCalculation key={payer.id} payer={payer} />
      ))}
    </Box>
  );
};

export { PayerListForCalculation };
