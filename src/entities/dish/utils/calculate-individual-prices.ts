import { PayersWithQuantity } from '@/shared/types';

const calculateIndividualPrices = (price: number, quantity: number, payers: PayersWithQuantity[]): number[] => {
  const totalCost = price * quantity;
  const totalPaidPortions = payers.reduce(
    (total, payer) => (payer.isChecked ? total + Number(payer.quantity) : total),
    0,
  );

  return payers.map((payer) => {
    if (payer.isChecked && Number(payer.quantity) > 0) {
      const share = Number(payer.quantity) / totalPaidPortions;
      const individualCost = totalCost * share;
      return Math.ceil(individualCost * 1000) / 1000;
    }
    return 0;
  });
};

export { calculateIndividualPrices };
