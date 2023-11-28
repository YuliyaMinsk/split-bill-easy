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

type PayerItemCalculationProps = {
  payer: Payer;
};

const PayerItemCalculation = ({ payer }: PayerItemCalculationProps): JSX.Element => {
  const { t } = useTranslation();
  const billList = useSelector((state: RootState) => state.bill);

  const { id, name } = payer;

  const filteredBill = billList.filter((item) => item.payers.some((payer) => payer.isChecked && payer.id === id));

  console.log(`😇 filteredBill ${name}`, filteredBill);

  // const { price, quantity } = filteredBill.reduce

  // const totalPaid = 222;
  // const totalCost = price * quantity;
  // const overpayment = totalPaid - totalCost;

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {/* {quantity} → {price} {!!overpayment && ' + ' + overpayment} ₸ */}
        </Typography>
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
              {filteredBill.map((bill, index) => (
                <TableRow key={payer.id}>
                  <TableCell component="th" scope="row">
                    {bill.dish.name}
                  </TableCell>
                  <TableCell align="right">----</TableCell>
                  <TableCell align="right">
                    {bill.dish.quantity} х {bill.dish.price} ₸
                  </TableCell>
                  <TableCell align="right">----</TableCell>
                  <TableCell align="right">{111} ₸</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
            <Button size="small" variant="text" sx={{ mr: 1 }}>
              {t('Copy to clipboard for ') + name}
            </Button>
          </Box>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export { PayerItemCalculation };
