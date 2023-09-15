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

import { BillLine } from '@/shared/types';

type DishProps = {
  dish: BillLine;
};

const Dish = ({ dish }: DishProps): JSX.Element => {
  const { t } = useTranslation();

  const { payers } = dish;
  const individualPrice = dish.dish.price / dish.dish.quantity;

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography sx={{ width: '40%', flexShrink: 0 }}>{dish.dish.name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {dish.dish.quantity} → {dish.dish.price}
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
                (payer) =>
                  payer.isChecked && (
                    <TableRow key={payer.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {payer.name}
                      </TableCell>
                      <TableCell align="right">----</TableCell>
                      <TableCell align="right">
                        {payer.quantity} х {individualPrice} тнг
                      </TableCell>
                      <TableCell align="right">----</TableCell>
                      <TableCell align="right">{payer.quantity * individualPrice} тнг</TableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>

          <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
            <Button size="small" variant="text" sx={{ mr: 1 }}>
              {t('Edit')}
            </Button>
            <Button size="small" variant="text">
              {t('Delete')}
            </Button>
          </Box>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export { Dish };
