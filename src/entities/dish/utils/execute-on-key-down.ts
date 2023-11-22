import { Dish, DishFieldUpdate } from '@/shared/types';

const executeOnKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  saveFunction: (update: DishFieldUpdate) => void,
) => {
  if (event.key === 'Enter') {
    const inputElement = event.target as HTMLInputElement;
    saveFunction({ field: inputElement.name as keyof Dish, value: inputElement.value });
  }
};

export { executeOnKeyDown };
