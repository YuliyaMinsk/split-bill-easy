import { BillLine, Payer, Service } from '../types';

interface DetailedPayerTotal {
  id: string;
  name: string;
  dishes: DishTotal[];
  services: ServiceTotal[];
  total: number;
}

interface DishTotal {
  dishId: string;
  dishName: string;
  cost: number;
  quantity: number;
}

interface ServiceTotal {
  serviceId: string;
  serviceName: string;
  type: 'add' | 'subtract';
  amount: number;
}

interface PayerDiscount {
  payerId: string;
  discountAmount: number;
}

function calculateDishCosts(payers: Payer[], billList: BillLine[]): DetailedPayerTotal[] {
  const detailedTotals: DetailedPayerTotal[] = payers.map((payer) => ({
    id: payer.id,
    name: payer.name,
    dishes: [],
    services: [],
    total: 0,
  }));

  billList.forEach((billItem) => {
    const dishCost = billItem.dish.price * billItem.dish.quantity;
    billItem.payers.forEach((payer) => {
      const payerDetail = detailedTotals.find((detail) => detail.id === payer.id);
      if (payerDetail && payer.isChecked && payer.quantity !== null) {
        const payerShare = Math.ceil(dishCost * (Number(payer.quantity) / billItem.dish.quantity) * 100);
        payerDetail.dishes.push({
          dishId: billItem.dish.id,
          dishName: billItem.dish.name,
          quantity: payer.quantity,
          cost: payerShare / 100,
        });
        payerDetail.total += payerShare / 100;
      }
    });
  });

  return detailedTotals;
}

function applyServices(detailedTotals: DetailedPayerTotal[], services: Service[]): DetailedPayerTotal[] {
  const totalsAfterAdd = applyAddServices(detailedTotals, services);

  const totalsAfterSubtract = totalsAfterAdd.map((payer) => {
    let total = payer.total;
    const appliedServices = [...payer.services];

    services.forEach((service) => {
      if (service.type === 'subtract' && service.feeType === 'fixed') {
        const discounts = applyFixedSubtractService(totalsAfterAdd, service);
        const discount = discounts.find((d) => d.payerId === payer.id)?.discountAmount || 0;

        total -= discount;

        appliedServices.push({
          serviceId: service.id,
          serviceName: service.name,
          type: service.type,
          amount: -discount,
        });
      }
    });

    return {
      ...payer,
      total,
      services: appliedServices,
    };
  });

  return totalsAfterSubtract;
}

function applyAddServices(detailedTotals: DetailedPayerTotal[], services: Service[]): DetailedPayerTotal[] {
  const appliedAddTotals = detailedTotals.map((payer) => {
    let total = payer.total;
    const appliedServices = JSON.parse(JSON.stringify(payer.services));

    let totalPercentageServices = 0;
    services.forEach((service) => {
      if (service.type === 'add' && service.feeType === 'percentage') {
        const serviceAmount = payer.total * (service.value / 100);
        totalPercentageServices += serviceAmount;

        appliedServices.push({
          serviceId: service.id,
          serviceName: service.name,
          type: service.type,
          amount: serviceAmount,
        });
      }
    });

    services.forEach((service) => {
      if (service.type === 'add' && service.feeType === 'fixed') {
        const serviceAmount = service.value / detailedTotals.length;
        total += serviceAmount;

        appliedServices.push({
          serviceId: service.id,
          serviceName: service.name,
          type: service.type,
          amount: serviceAmount,
        });
      }
    });

    total += totalPercentageServices;

    return {
      ...payer,
      total,
      services: appliedServices,
    };
  });

  return appliedAddTotals;
}

function applyFixedSubtractService(detailedTotals: DetailedPayerTotal[], service: Service): PayerDiscount[] {
  let remainingDiscount = service.value;
  const payerDiscounts: PayerDiscount[] = detailedTotals.map((payer) => ({ payerId: payer.id, discountAmount: 0 }));

  while (remainingDiscount > 0) {
    let totalDiscountApplied = 0;
    let payersEligibleForDiscount = detailedTotals.filter(
      (payer) =>
        payer.total > 0 &&
        !payerDiscounts.some((discount) => discount.payerId === payer.id && discount.discountAmount >= payer.total),
    );

    if (payersEligibleForDiscount.length === 0) break;

    const discountPerPayer = remainingDiscount / payersEligibleForDiscount.length;

    payersEligibleForDiscount.forEach((payer) => {
      const maxDiscount =
        payer.total - (payerDiscounts.find((discount) => discount.payerId === payer.id)?.discountAmount || 0);
      const discountAmount = Math.min(maxDiscount, discountPerPayer);
      totalDiscountApplied += discountAmount;

      const payerDiscount = payerDiscounts.find((discount) => discount.payerId === payer.id);
      if (payerDiscount) {
        payerDiscount.discountAmount += discountAmount;
      }
    });

    remainingDiscount -= totalDiscountApplied;

    payersEligibleForDiscount = detailedTotals.filter(
      (payer) => payer.total > 0 && !payerDiscounts.some((discount) => discount.payerId === payer.id),
    );
  }

  return payerDiscounts;
}

function calculateTotalBill(detailedTotals: DetailedPayerTotal[]): number {
  return detailedTotals.reduce((acc, payer) => acc + payer.total, 0);
}

export { calculateTotalBill, applyServices, calculateDishCosts };
export type { DetailedPayerTotal };
