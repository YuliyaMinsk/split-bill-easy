import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

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

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Payer } from '@/shared/types';
import { RootState } from '@/shared/store';
import { generateBillText } from '@/shared/utils';

type PayerItemCalculationProps = {
  currentPayer: Payer;
};

const PayerItemCalculation = ({ currentPayer }: PayerItemCalculationProps): JSX.Element => {
  const { t } = useTranslation();
  const bill = useSelector((state: RootState) => state.bill.billList);
  const serviceList = useSelector((state: RootState) => state.services);

  const { name } = currentPayer;

  const payerBillData = generateBillText([currentPayer], bill, serviceList, t);

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
        <Typography sx={{ color: 'text.secondary' }}>{totalPrice} ₸</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <TableContainer
          sx={{
            background: 'rgba(151, 71, 255, 0.04)',
            border: '1px dashed #9747FF',
            borderRadius: 4,
            padding: '4px',
          }}
        >
          <Table sx={{ minWidth: '100%' }} size="small">
            <TableBody>
              {transformedData.dishes.map((dish) => {
                return (
                  <TableRow key={String(currentPayer.id) + String(dish.id)}>
                    <TableCell component="th" scope="row">
                      {dish.name}
                    </TableCell>
                    <TableCell align="right">----</TableCell>
                    <TableCell align="right">
                      {dish.quantity} х {dish.price} ₸
                    </TableCell>
                    <TableCell align="right">----</TableCell>
                    <TableCell align="right">{dish.quantity * dish.price} ₸</TableCell>
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
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export { PayerItemCalculation };
