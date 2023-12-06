import { TFunction } from 'i18next';

import { Bill, Dish, Payer, PayerDishes, Service } from '../types';
import { addServiceToBill, transformBillData } from '.';

const formatLine = (name: string, quantity: number, price: number, totalWidth = 30): string => {
  const nameWidth = name.length;
  const priceFormatted = Number(price).toFixed();
  const quantityPricePart = `${quantity} x ${priceFormatted} ₸`;
  const quantityFormatted = quantityPricePart.padStart(totalWidth - nameWidth, ' ');
  return `${name}${quantityFormatted}`;
};

const formatBillString = (payerName: string, dishes: Dish[], totalPrice: number, t: TFunction): string => {
  const line = '------------------------------';
  const billString = dishes.map((dish) => formatLine(dish.name, dish.quantity, dish.price)).join('\n');
  const totalString = t('Total price').padEnd(20, ' ') + `: ${totalPrice.toFixed()} ₸`;

  return '```\n' + t('Bill for') + `: ${payerName}\n${line}\n${billString}\n${line}\n${totalString}` + '\n```';
};

const generateBillText = (
  payers: Payer[],
  bill: Bill,
  serviceList: Service[],
  t: TFunction,
): { billText: string; transformedData: PayerDishes; totalPrice: number }[] => {
  const translatedServices = serviceList.map((service) => ({
    ...service,
    name: t(service.name),
  }));

  return payers.map((payer) => {
    const transformedData = transformBillData(bill, payer.id);
    const baseTotalPrice = transformedData.dishes.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const transformedDataWithServices = addServiceToBill(transformedData, translatedServices, baseTotalPrice);
    const totalPrice = transformedDataWithServices.dishes.reduce((acc, item) => acc + item.quantity * item.price, 0);

    const billText = formatBillString(payer.name, transformedDataWithServices.dishes, totalPrice, t);

    return { billText, transformedData: transformedDataWithServices, totalPrice };
  });
};

export { generateBillText, formatBillString };
