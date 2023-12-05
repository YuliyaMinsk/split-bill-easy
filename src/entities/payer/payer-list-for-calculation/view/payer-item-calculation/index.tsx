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
import { addServiceToBill, transformBillData } from '@/shared/utils';

type PayerItemCalculationProps = {
  currentPayer: Payer;
};

const PayerItemCalculation = ({ currentPayer }: PayerItemCalculationProps): JSX.Element => {
  const { t } = useTranslation();
  const billList = useSelector((state: RootState) => state.bill);
  const serviceList = useSelector((state: RootState) => state.services);

  const translatedServices = serviceList.map((service) => ({
    ...service,
    name: t(service.name),
  }));

  const { name } = currentPayer;

  const transformedData = transformBillData(billList, currentPayer.id);

  const baseTotalPrice = transformedData.dishes.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const transformedDataWithServices = addServiceToBill(transformedData, translatedServices, baseTotalPrice);

  const totalPrice = transformedDataWithServices.dishes.reduce((acc, item) => acc + item.quantity * item.price, 0);

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
