import { TFunction } from 'i18next';

import { Currency } from '../enums';
import { DetailedPayerTotal, Payer } from '../types';

function formatBillText(currentPayer: Payer, payerDetail: DetailedPayerTotal, currency: Currency, t: TFunction) {
  let totalForPayer = 0;
  let billText = '``` ' + t('Bill for') + `: ${currentPayer.name}\n`;
  billText += '-------------------------- \n';

  payerDetail.dishes.forEach((dish) => {
    billText += `${dish.dishName.padEnd(16)}      ${Number(dish.cost).toFixed(2)} ${currency}\n`;
    totalForPayer += dish.cost;
  });

  payerDetail.services.forEach((service) => {
    if (service.amount !== 0) {
      billText += `${t(service.serviceName).padEnd(16)}      ${service.amount.toFixed(2)} ${currency}\n`;
      totalForPayer += service.amount;
    }
  });

  billText += '-------------------------- \n';
  billText += t('Total price') + `:       ${totalForPayer.toFixed(2)} ${currency}` + '\n\n ```';

  return billText;
}

export { formatBillText };
