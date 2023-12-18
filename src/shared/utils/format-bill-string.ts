import { TFunction } from 'i18next';

import { Currency } from '../enums';
import { Bill, Dish, Payer, PayerDishes, Service } from '../types';
import { addServiceToBill, transformBillData } from '.';

const formatLine = (name: string, quantity: number, price: number, currency: Currency, totalWidth = 30): string => {
  const nameWidth = name.length;
  const priceFormatted = Number(price).toFixed();
  const quantityPricePart = `${quantity} x ${priceFormatted} ${currency}`;
  const quantityFormatted = quantityPricePart.padStart(totalWidth - nameWidth, ' ');
  return `${name}${quantityFormatted}`;
};

const formatBillString = (
  payerName: string,
  dishes: Dish[],
  totalPrice: number,
  t: TFunction,
  currency: Currency,
): string => {
  const line = '------------------------------';
  const billString = dishes
    .map((dish) => formatLine(dish.name, Number(dish.quantity), dish.price, currency))
    .join('\n');
  const totalString = t('Total price').padEnd(20, ' ') + `: ${totalPrice.toFixed()} ${currency}`;

  return '```\n' + t('Bill for') + `: ${payerName}\n${line}\n${billString}\n${line}\n${totalString}` + '\n```';
};

const generateBillText = (
  payers: Payer[],
  bill: Bill,
  serviceList: Service[],
  t: TFunction,
  currency: Currency,
): { billText: string; transformedData: PayerDishes; totalPrice: number }[] => {
  const translatedServices = serviceList.map((service) => ({
    ...service,
    name: t(service.name),
  }));

  return payers.map((payer) => {
    const transformedData = transformBillData(bill, payer.id);
    const baseTotalPrice = transformedData.dishes.reduce((acc, item) => acc + Number(item.quantity) * item.price, 0);
    const transformedDataWithServices = addServiceToBill(transformedData, translatedServices, baseTotalPrice);
    const totalPrice = transformedDataWithServices.dishes.reduce(
      (acc, item) => acc + Number(item.quantity) * item.price,
      0,
    );

    const billText = formatBillString(payer.name, transformedDataWithServices.dishes, totalPrice, t, currency);

    return { billText, transformedData: transformedDataWithServices, totalPrice };
  });
};

export { generateBillText, formatBillString };
