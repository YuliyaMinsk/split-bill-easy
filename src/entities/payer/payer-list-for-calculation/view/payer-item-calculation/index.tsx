import { useTranslation } from 'react-i18next';

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

type PayerItemCalculationProps = {
  payer: Payer;
};

const PayerItemCalculation = ({ payer }: PayerItemCalculationProps): JSX.Element => {
  const { t } = useTranslation();

  const { id, name } = payer;

  const price = 100;
  const quantity = 2;

  const individualPrices = 111;
  const totalPaid = 222;
  const totalCost = price * quantity;
  const overpayment = totalPaid - totalCost;

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
              {/* {payers.map(
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
              )} */}
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
