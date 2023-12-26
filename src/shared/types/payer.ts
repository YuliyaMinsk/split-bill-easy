type Payer = {
  id: string;
  name: string;
};

type PayersWithQuantity = Payer & {
  isChecked: boolean;
  quantity: number | null;
};

type PayerDishes = {
  id: string;
  name: string;
  dishes: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
};

type PayerTotal = {
  id: string;
  name: string;
  total: number;
};

export type { Payer, PayerTotal, PayersWithQuantity, PayerDishes };
