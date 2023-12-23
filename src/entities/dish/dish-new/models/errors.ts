import { Dish } from '@/shared/types';

type ErrorDish = { [key in keyof Dish]?: boolean };

export type { ErrorDish };
