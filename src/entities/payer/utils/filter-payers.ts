import { PayersWithQuantity } from '@/shared/types';

const filterPayers = (payerListWithQuantity: PayersWithQuantity[]): PayersWithQuantity[] =>
  payerListWithQuantity.filter((payer) => payer.isChecked);

export { filterPayers };
