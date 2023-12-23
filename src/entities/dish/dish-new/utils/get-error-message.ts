import { TFunction } from 'i18next';

import { ErrorDish } from '../models';

const getErrorMessage = (errors: ErrorDish, t: TFunction): string => {
  const errorMessages = [];
  if (errors.name) errorMessages.push(t('Item is required'));
  if (errors.price) errorMessages.push(t('Price is required'));
  if (errors.quantity) errorMessages.push(t('Quantity is required'));

  return errorMessages.join(', ');
};

export { getErrorMessage };
