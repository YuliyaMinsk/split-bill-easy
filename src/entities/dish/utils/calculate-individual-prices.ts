import { PayersWithQuantity } from '@/shared/types';

const calculateIndividualPrices = (price: number, quantity: number, payers: PayersWithQuantity[]): number[] => {
  const totalCost = price * quantity;
  const totalPaidPortions = payers.reduce((total, payer) => (payer.isChecked ? total + payer.quantity : total), 0);

  return payers.map((payer) => {
    if (payer.isChecked && payer.quantity > 0) {
      const share = payer.quantity / totalPaidPortions;
      const individualCost = totalCost * share;
      return Math.ceil(individualCost);
    }
    return 0;
  });
};

export { calculateIndividualPrices };
