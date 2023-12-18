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

export type { Payer, PayersWithQuantity, PayerDishes };
