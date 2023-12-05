import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

import { RootState } from '@/shared/store';
import { generateBillText } from '@/shared/utils';

const CopyPaymentSummary = (): JSX.Element => {
  const { t } = useTranslation();
  const bill = useSelector((state: RootState) => state.bill);
  const serviceList = useSelector((state: RootState) => state.services);
  const payerList = useSelector((state: RootState) => state.payers);

  const payerBillData = generateBillText(payerList, bill, serviceList, t);
  const allBillsText = payerBillData.map((data) => data.billText).join('\n\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(allBillsText);
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
