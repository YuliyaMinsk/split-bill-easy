enum Currency {
  USD = '$',
  RUB = '₽',
  KZT = '₸',
  BYN = 'Br',
}

type CurrencyKey = keyof typeof Currency;

export { Currency };
export type { CurrencyKey };
