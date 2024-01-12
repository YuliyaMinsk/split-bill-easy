import { PayersWithQuantity } from '@/shared/types';
import { filterPayers } from '.';

const countQuantity = (payerListWithQuantity: PayersWithQuantity[], totalQuantity: number): number => {
  const checkedPayers = filterPayers(payerListWithQuantity);
  return checkedPayers.length ? Math.round((totalQuantity / checkedPayers.length) * 10000000) / 10000000 : 0;
};

export { countQuantity };
