import { Box, Button } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { SnackbarTop } from '@/shared/ui';
import { applyServices, calculateDishCosts, formatBillText } from '@/shared/utils';

const CopyPaymentSummary: FC = () => {
  const { t } = useTranslation();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const billList = useSelector((state: RootState) => state.bill.billList);
  const serviceList = useSelector((state: RootState) => state.services);
  const payerList = useSelector((state: RootState) => state.payers);
  const currency = useSelector((state: RootState) => state.profile.currency);

  let detailedTotals = calculateDishCosts(payerList, billList);
  detailedTotals = applyServices(detailedTotals, serviceList);

  const allBillsText = detailedTotals
    .map((payerDetail) => {
      const currentPayer = payerList.find((payer) => payer.id === payerDetail.id);
      return currentPayer ? formatBillText(currentPayer, payerDetail, currency, t) : '';
    })
    .join('\n\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(allBillsText);
      setOpenSnackbar(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, ml: 2, mr: 2, mb: 4 }}>
      <Button size="large" variant="contained" sx={{ width: '100%', mr: 1 }} onClick={handleCopy}>
        {t('Copy to clipboard for everyone')}
      </Button>
      <SnackbarTop open={openSnackbar} handleClose={handleClose} message={t('Bill copied to clipboard')} />
    </Box>
  );
};

export { CopyPaymentSummary };
