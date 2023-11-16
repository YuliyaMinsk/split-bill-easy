type Dish = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type DishFieldUpdate = {
  field: keyof Dish;
  value: string;
};

export type { Dish, DishFieldUpdate };
