import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { applyServices, calculateDishCosts, calculateTotalBill } from '@/shared/utils';

const CopyPaymentSummary: FC = () => {
  const { t } = useTranslation();
  const billList = useSelector((state: RootState) => state.bill.billList);
  const serviceList = useSelector((state: RootState) => state.services);
  const payerList = useSelector((state: RootState) => state.payers);
  const currency = useSelector((state: RootState) => state.profile.currency);

  let detailedTotals = calculateDishCosts(payerList, billList);
  detailedTotals = applyServices(detailedTotals, serviceList);
  const totalBill = calculateTotalBill(detailedTotals);

  // const payerBillData = generateBillText(payerList, bill, serviceList, t, currency);
  // const allBillsText = payerBillData.map((data) => data.billText).join('\n\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('!!!');
      console.log('Bill copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, ml: 2, mr: 2, mb: 4 }}>
      <Button size="large" variant="contained" sx={{ width: '100%', mr: 1 }} onClick={handleCopy}>
        {t('Copy to clipboard for everyone')}
      </Button>
    </Box>
  );
};

export { CopyPaymentSummary };
