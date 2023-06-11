import { Dish } from './dish';
import { PayersWithQuantity } from './payer';

type BillLine = {
  dish: Dish;
  payers: PayersWithQuantity[];
};

type Bill = BillLine[];

export type { Bill, BillLine };
