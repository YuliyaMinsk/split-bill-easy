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

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { removeBillLine, setEditingBillLine } from '@/shared/store/bill/bill-slice';
import { StyledTableContainer, StyledTableRow } from '@/shared/styles';
import { BillLine } from '@/shared/types';
import { roundUp } from '@/shared/utils';

import { calculateIndividualPrices } from '../utils';

interface DishProps {
  billLine: BillLine;
}

const Dish: FC<DishProps> = ({ billLine }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.profile.currency);

  const { dish, payers } = billLine;
  const { name, price, quantity } = dish;

  const individualPrices = calculateIndividualPrices(price, quantity, payers);

  const handleEdit = () => {
    dispatch(setEditingBillLine(billLine));
  };

  const handleDelete = () => {
    dispatch(removeBillLine(dish.id));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0, textAlign: 'left' }}>{name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {quantity} → {price} {currency}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <StyledTableContainer>
          <Table sx={{ minWidth: '100%' }} size="small">
            <TableBody>
              {payers.map(
                (payer, index) =>
                  payer.isChecked && (
                    <StyledTableRow key={payer.id}>
                      <TableCell component="th" scope="row">
                        {payer.name}
                      </TableCell>
                      <TableCell align="right">
                        {payer.quantity ? roundUp(payer.quantity, 2) : 0} х {price} {currency}
                      </TableCell>
                      <TableCell align="right">
                        {roundUp(individualPrices[index], 2)} {currency}
                      </TableCell>
                    </StyledTableRow>
                  ),
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
          <Button size="small" variant="text" sx={{ mr: 1 }} onClick={handleEdit}>
            {t('Edit')}
          </Button>
          <Button size="small" variant="text" onClick={handleDelete}>
            {t('Delete')}
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export { Dish };
