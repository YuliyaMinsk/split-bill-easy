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
import { generateBillText } from '@/shared/utils';

const StyledTableContainer = styled(TableContainer)`
  background: rgba(151, 71, 255, 0.04);
  border: 1px dashed #9747ff;
  border-radius: 16px;
  padding: 4px;
`;

type PayerItemCalculationProps = {
  currentPayer: Payer;
};

const PayerItemCalculation: FC<PayerItemCalculationProps> = ({ currentPayer }) => {
  const { t } = useTranslation();
  const bill = useSelector((state: RootState) => state.bill.billList);
  const serviceList = useSelector((state: RootState) => state.services);
  const currency = useSelector((state: RootState) => state.profile.currency);

  const { name } = currentPayer;

  const payerBillData = generateBillText([currentPayer], bill, serviceList, t, currency);

  const { billText, transformedData, totalPrice } = payerBillData[0];

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(billText);
      console.log('Bill copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {totalPrice.toFixed()} {currency}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <StyledTableContainer>
          <Table sx={{ minWidth: '100%' }} size="small">
            <TableBody>
              {transformedData.dishes.map((dish) => {
                return (
                  <TableRow key={String(currentPayer.id) + String(dish.id)}>
                    <TableCell component="th" scope="row">
                      {dish.name}
                    </TableCell>
                    <TableCell align="right">
                      {dish.quantity} х {Number(dish.price).toFixed()} {currency}
                    </TableCell>
                    <TableCell align="right">
                      {Number(Number(dish.quantity) * dish.price).toFixed()} {currency}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
            <Button size="small" variant="text" sx={{ mr: 1 }} onClick={handleCopyToClipboard}>
              {t('Copy to clipboard for ') + name}
            </Button>
          </Box>
        </StyledTableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export { PayerItemCalculation };
