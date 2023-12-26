import styled from '@emotion/styled';
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
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { Payer } from '@/shared/types';
import { DetailedPayerTotal, formatBillText } from '@/shared/utils';

const StyledTableContainer = styled(TableContainer)`
  background: rgba(151, 71, 255, 0.04);
  border: 1px dashed #9747ff;
  border-radius: 16px;
  padding: 4px;
`;

type PayerItemCalculationProps = {
  currentPayer: Payer;
  payerDetail: DetailedPayerTotal;
};

const PayerItemCalculation: FC<PayerItemCalculationProps> = ({ currentPayer, payerDetail }) => {
  const { t } = useTranslation();
  const currency = useSelector((state: RootState) => state.profile.currency);

  const handleCopyToClipboard = async () => {
    const result = formatBillText(currentPayer, payerDetail, currency);
    try {
      await navigator.clipboard.writeText(result);
      console.log('Bill copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{currentPayer.name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {payerDetail.total.toFixed(2)} {currency}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <StyledTableContainer>
          <Table sx={{ minWidth: '100%' }} size="small">
            <TableBody>
              {payerDetail.dishes.map((dish) => (
                <TableRow key={dish.dishId}>
                  <TableCell component="th" scope="row">
                    {dish.dishName}
                  </TableCell>
                  <TableCell align="right">{dish.quantity}</TableCell>
                  <TableCell align="right">
                    {dish.cost.toFixed(2)} {currency}
                  </TableCell>
                </TableRow>
              ))}
              {payerDetail.services.map(
                (service) =>
                  service.amount !== 0 && (
                    <TableRow key={service.serviceId}>
                      <TableCell component="th" scope="row" colSpan={2}>
                        {service.serviceName}
                      </TableCell>
                      <TableCell align="right">
                        {service.amount.toFixed(2)} {currency}
                      </TableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
          <Button size="small" variant="text" sx={{ mr: 1 }} onClick={handleCopyToClipboard}>
            {t('Copy to clipboard for ') + currentPayer.name}
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export { PayerItemCalculation };
