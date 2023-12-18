import { Bill, PayerDishes } from '@/shared/types';

const transformBillData = (bill: Bill, currentPayerId: string): PayerDishes => {
  const payerDishes: PayerDishes = {
    id: currentPayerId,
    name: '',
    dishes: [],
  };

  bill.forEach((item) => {
    const payer = item.payers.find((p) => p.id === currentPayerId && p.isChecked && Number(p.quantity) > 0);
    if (payer) {
      payerDishes.name = payer.name;
      payerDishes.dishes.push({
        id: item.dish.id,
        name: item.dish.name,
        price: item.dish.price,
        quantity: Number(payer.quantity),
      });
    }
  });

  return payerDishes;
};

export { transformBillData };
