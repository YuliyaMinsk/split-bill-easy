type Payer = {
  id: string;
  name: string;
};

type PayersWithQuantity = Payer & {
  isChecked: boolean;
  quantity: number;
};

export type { Payer, PayersWithQuantity };
