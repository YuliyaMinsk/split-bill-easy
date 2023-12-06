import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

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

import { BillLine } from '@/shared/types';
import { removeBillLine } from '@/shared/store/bill/bill-slice';

import { calculateIndividualPrices } from '../utils';

type DishProps = {
  bill: BillLine;
};

const Dish = ({ bill }: DishProps): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { dish, payers } = bill;
  const { name, price, quantity } = dish;

  const individualPrices = calculateIndividualPrices(price, quantity, payers);
  const totalPaid = individualPrices.reduce((sum, price) => sum + price, 0);
  const totalCost = price * quantity;
  const overpayment = totalPaid - totalCost;

  const handleDelete = () => {
    dispatch(removeBillLine(dish.id));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {quantity} → {price} {!!overpayment && ' + ' + overpayment} ₸
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
                      <TableCell align="right">----</TableCell>
                      <TableCell align="right">
                        {payer.quantity} х {price} ₸
                      </TableCell>
                      <TableCell align="right">----</TableCell>
                      <TableCell align="right">{individualPrices[index]} ₸</TableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>

          <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
            <Button size="small" variant="text" sx={{ mr: 1 }}>
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
