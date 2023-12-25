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
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { removeBillLine, setEditingBillLine } from '@/shared/store/bill/bill-slice';
import { BillLine } from '@/shared/types';

import { calculateIndividualPrices } from '../utils';

type DishProps = {
  billLine: BillLine;
};

const Dish: FC<DishProps> = ({ billLine }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.profile.currency);

  const { dish, payers } = billLine;
  const { name, price, quantity } = dish;

  const individualPrices = calculateIndividualPrices(price, quantity, payers);
  const totalPaid = individualPrices.reduce((sum, price) => sum + price, 0);
  const totalCost = price * quantity;
  const overpayment = totalPaid - totalCost;

  const handleEdit = () => {
    dispatch(setEditingBillLine(billLine));
  };

  const handleDelete = () => {
    dispatch(removeBillLine(dish.id));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {quantity} → {price} {!!overpayment && ' + ' + overpayment} {currency}
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
              {payers.map(
                (payer, index) =>
                  payer.isChecked && (
                    <TableRow key={payer.id}>
                      <TableCell component="th" scope="row">
                        {payer.name}
                      </TableCell>
                      <TableCell align="right">
                        {payer.quantity || 0} х {price} {currency}
                      </TableCell>
                      <TableCell align="right">
                        {individualPrices[index]} {currency}
                      </TableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>

          <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
            <Button size="small" variant="text" sx={{ mr: 1 }} onClick={handleEdit}>
              {t('Edit')}
            </Button>
            <Button size="small" variant="text" onClick={handleDelete}>
              {t('Delete')}
            </Button>
          </Box>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export { Dish };
