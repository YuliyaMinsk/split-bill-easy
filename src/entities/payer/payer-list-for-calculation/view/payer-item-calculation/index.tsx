import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  Typography,
} from '@mui/material';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { StyledTableContainer, StyledTableRow } from '@/shared/styles';
import { DetailedPayerTotal, Payer } from '@/shared/types';
import { SnackbarTop } from '@/shared/ui';
import { formatBillText, roundUp } from '@/shared/utils';

interface PayerItemCalculationProps {
  currentPayer: Payer;
  payerDetail: DetailedPayerTotal;
}

const PayerItemCalculation: FC<PayerItemCalculationProps> = ({ currentPayer, payerDetail }) => {
  const { t } = useTranslation();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const currency = useSelector((state: RootState) => state.profile.currency);

  const handleCopyToClipboard = async () => {
    const result = formatBillText(currentPayer, payerDetail, currency, t);
    try {
      await navigator.clipboard.writeText(result);
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
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{currentPayer.name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {roundUp(payerDetail.total, 2)} {currency}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        {!!payerDetail.dishes.length && (
          <StyledTableContainer>
            <Table sx={{ minWidth: '100%' }} size="small">
              <TableBody>
                {payerDetail.dishes.map((dish) => (
                  <StyledTableRow key={dish.dishId}>
                    <TableCell component="th" scope="row">
                      {dish.dishName}
                    </TableCell>
                    <TableCell align="right">{roundUp(dish.quantity, 2)}</TableCell>
                    <TableCell align="right">
                      {roundUp(dish.cost, 2)} {currency}
                    </TableCell>
                  </StyledTableRow>
                ))}
                {payerDetail.services.map(
                  (service) =>
                    service.amount !== 0 && (
                      <StyledTableRow key={service.serviceId}>
                        <TableCell component="th" scope="row" colSpan={2}>
                          {t(service.serviceName)}
                        </TableCell>
                        <TableCell align="right">
                          {roundUp(service.amount, 2)} {currency}
                        </TableCell>
                      </StyledTableRow>
                    ),
                )}
              </TableBody>
            </Table>
          </StyledTableContainer>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
          <Button size="small" variant="text" sx={{ mr: 1 }} onClick={handleCopyToClipboard}>
            {t('Copy to clipboard for ') + currentPayer.name}
          </Button>
          <SnackbarTop open={openSnackbar} handleClose={handleClose} message={t('Bill copied to clipboard')} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export { PayerItemCalculation };
