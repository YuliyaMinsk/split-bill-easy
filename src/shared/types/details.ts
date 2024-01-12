type DetailedPayerTotal = {
  id: string;
  name: string;
  dishes: DishTotal[];
  services: ServiceTotal[];
  total: number;
};

type DishTotal = {
  dishId: string;
  dishName: string;
  cost: number;
  quantity: number;
};

type ServiceTotal = {
  serviceId: string;
  serviceName: string;
  type: 'add' | 'subtract';
  amount: number;
};

type PayerDiscount = {
  payerId: string;
  discountAmount: number;
};

export type { DetailedPayerTotal, DishTotal, ServiceTotal, PayerDiscount };
