import { BillLine, DetailedPayerTotal, Payer, Service } from '@/shared/types';

const testPayers: Payer[] = [
  {
    id: '1',
    name: 'Лена',
  },
  {
    id: '2',
    name: 'Аза',
  },
  {
    id: '3',
    name: 'Кайрат',
  },
  {
    id: '4',
    name: 'Венера',
  },
  {
    id: '5',
    name: 'Паша',
  },
  {
    id: '6',
    name: 'Алия',
  },
];

const testBillList: BillLine[] = [
  {
    dish: {
      id: '1',
      name: 'Чай Assam',
      price: 1690,
      quantity: 1,
    },
    payers: [
      {
        id: '1',
        name: 'Лена',
        isChecked: true,
        quantity: 1,
      },
      {
        id: '2',
        name: 'Аза',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '3',
        name: 'Кайрат',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '4',
        name: 'Венера',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '5',
        name: 'Паша',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '6',
        name: 'Алия',
        isChecked: false,
        quantity: 0,
      },
    ],
  },
  {
    dish: {
      id: '2',
      name: 'Чай Пуэр',
      price: 1690,
      quantity: 1,
    },
    payers: [
      {
        id: '1',
        name: 'Лена',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '2',
        name: 'Аза',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '3',
        name: 'Кайрат',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '4',
        name: 'Венера',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '5',
        name: 'Паша',
        isChecked: true,
        quantity: 1,
      },
      {
        id: '6',
        name: 'Алия',
        isChecked: false,
        quantity: 0,
      },
    ],
  },
  {
    dish: {
      id: '3',
      name: 'Ташкентский чай',
      price: 2190,
      quantity: 1,
    },
    payers: [
      {
        id: '1',
        name: 'Лена',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '2',
        name: 'Аза',
        isChecked: true,
        quantity: 0.25,
      },
      {
        id: '3',
        name: 'Кайрат',
        isChecked: true,
        quantity: 0.25,
      },
      {
        id: '4',
        name: 'Венера',
        isChecked: true,
        quantity: 0.25,
      },
      {
        id: '5',
        name: 'Паша',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '6',
        name: 'Алия',
        isChecked: true,
        quantity: 0.25,
      },
    ],
  },
  {
    dish: {
      id: '4',
      name: 'Пицца Пипперони',
      price: 7000,
      quantity: 1,
    },
    payers: [
      {
        id: '1',
        name: 'Лена',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '2',
        name: 'Аза',
        isChecked: true,
        quantity: 0.3333333,
      },
      {
        id: '3',
        name: 'Кайрат',
        isChecked: true,
        quantity: 0.3333333,
      },
      {
        id: '4',
        name: 'Венера',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '5',
        name: 'Паша',
        isChecked: true,
        quantity: 0.3333333,
      },
      {
        id: '6',
        name: 'Алия',
        isChecked: false,
        quantity: 0,
      },
    ],
  },
  {
    dish: {
      id: '5',
      name: 'Ташкентский чай 2',
      price: 2190,
      quantity: 1,
    },
    payers: [
      {
        id: '1',
        name: 'Лена',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '2',
        name: 'Аза',
        isChecked: true,
        quantity: 0.33333,
      },
      {
        id: '3',
        name: 'Кайрат',
        isChecked: true,
        quantity: 0.33333,
      },
      {
        id: '4',
        name: 'Венера',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '5',
        name: 'Паша',
        isChecked: false,
        quantity: 0,
      },
      {
        id: '6',
        name: 'Алия',
        isChecked: true,
        quantity: 0.33333,
      },
    ],
  },
];

const testServices: Service[] = [
  {
    id: '0',
    name: 'Service Charge',
    type: 'add',
    feeType: 'percentage',
    value: 0,
  },
  {
    id: '1',
    name: 'Tips',
    type: 'add',
    feeType: 'percentage',
    value: 0,
  },
  {
    id: '2',
    name: 'Discount',
    type: 'subtract',
    feeType: 'percentage',
    value: 0,
  },
  {
    id: '3',
    name: 'Tax',
    type: 'add',
    feeType: 'percentage',
    value: 0,
  },
];

const testDetailedTotals: DetailedPayerTotal[] = [
  {
    'id': '1',
    'name': 'Лена',
    'dishes': [
      {
        'dishId': '1',
        'dishName': 'Чай Assam',
        'quantity': 1,
        'cost': 1690,
      },
    ],
    'services': [],
    'total': 1690,
  },
  {
    'id': '2',
    'name': 'Аза',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
      {
        'dishId': '4',
        'dishName': 'Пицца Пипперони',
        'quantity': 0.3333333,
        'cost': 2333.334,
      },
      {
        'dishId': '5',
        'dishName': 'Ташкентский чай 2',
        'quantity': 0.33333,
        'cost': 729.993,
      },
    ],
    'services': [],
    'total': 3610.8269999999998,
  },
  {
    'id': '3',
    'name': 'Кайрат',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
      {
        'dishId': '4',
        'dishName': 'Пицца Пипперони',
        'quantity': 0.3333333,
        'cost': 2333.334,
      },
      {
        'dishId': '5',
        'dishName': 'Ташкентский чай 2',
        'quantity': 0.33333,
        'cost': 729.993,
      },
    ],
    'services': [],
    'total': 3610.8269999999998,
  },
  {
    'id': '4',
    'name': 'Венера',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
    ],
    'services': [],
    'total': 547.5,
  },
  {
    'id': '5',
    'name': 'Паша',
    'dishes': [
      {
        'dishId': '2',
        'dishName': 'Чай Пуэр',
        'quantity': 1,
        'cost': 1690,
      },
      {
        'dishId': '4',
        'dishName': 'Пицца Пипперони',
        'quantity': 0.3333333,
        'cost': 2333.334,
      },
    ],
    'services': [],
    'total': 4023.334,
  },
  {
    'id': '6',
    'name': 'Алия',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
      {
        'dishId': '5',
        'dishName': 'Ташкентский чай 2',
        'quantity': 0.33333,
        'cost': 729.993,
      },
    ],
    'services': [],
    'total': 1277.493,
  },
];

const testDetailedTotalsWithServices: DetailedPayerTotal[] = [
  {
    'id': '1',
    'name': 'Лена',
    'dishes': [
      {
        'dishId': '1',
        'dishName': 'Чай Assam',
        'quantity': 1,
        'cost': 1690,
      },
    ],
    'services': [
      {
        'serviceId': '0',
        'serviceName': 'Service Charge',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '1',
        'serviceName': 'Tips',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '3',
        'serviceName': 'Tax',
        'type': 'add',
        'amount': 0,
      },
    ],
    'total': 1690,
  },
  {
    'id': '2',
    'name': 'Аза',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
      {
        'dishId': '4',
        'dishName': 'Пицца Пипперони',
        'quantity': 0.3333333,
        'cost': 2333.334,
      },
      {
        'dishId': '5',
        'dishName': 'Ташкентский чай 2',
        'quantity': 0.33333,
        'cost': 729.993,
      },
    ],
    'services': [
      {
        'serviceId': '0',
        'serviceName': 'Service Charge',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '1',
        'serviceName': 'Tips',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '3',
        'serviceName': 'Tax',
        'type': 'add',
        'amount': 0,
      },
    ],
    'total': 3610.8269999999998,
  },
  {
    'id': '3',
    'name': 'Кайрат',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
      {
        'dishId': '4',
        'dishName': 'Пицца Пипперони',
        'quantity': 0.3333333,
        'cost': 2333.334,
      },
      {
        'dishId': '5',
        'dishName': 'Ташкентский чай 2',
        'quantity': 0.33333,
        'cost': 729.993,
      },
    ],
    'services': [
      {
        'serviceId': '0',
        'serviceName': 'Service Charge',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '1',
        'serviceName': 'Tips',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '3',
        'serviceName': 'Tax',
        'type': 'add',
        'amount': 0,
      },
    ],
    'total': 3610.8269999999998,
  },
  {
    'id': '4',
    'name': 'Венера',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
    ],
    'services': [
      {
        'serviceId': '0',
        'serviceName': 'Service Charge',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '1',
        'serviceName': 'Tips',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '3',
        'serviceName': 'Tax',
        'type': 'add',
        'amount': 0,
      },
    ],
    'total': 547.5,
  },
  {
    'id': '5',
    'name': 'Паша',
    'dishes': [
      {
        'dishId': '2',
        'dishName': 'Чай Пуэр',
        'quantity': 1,
        'cost': 1690,
      },
      {
        'dishId': '4',
        'dishName': 'Пицца Пипперони',
        'quantity': 0.3333333,
        'cost': 2333.334,
      },
    ],
    'services': [
      {
        'serviceId': '0',
        'serviceName': 'Service Charge',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '1',
        'serviceName': 'Tips',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '3',
        'serviceName': 'Tax',
        'type': 'add',
        'amount': 0,
      },
    ],
    'total': 4023.334,
  },
  {
    'id': '6',
    'name': 'Алия',
    'dishes': [
      {
        'dishId': '3',
        'dishName': 'Ташкентский чай',
        'quantity': 0.25,
        'cost': 547.5,
      },
      {
        'dishId': '5',
        'dishName': 'Ташкентский чай 2',
        'quantity': 0.33333,
        'cost': 729.993,
      },
    ],
    'services': [
      {
        'serviceId': '0',
        'serviceName': 'Service Charge',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '1',
        'serviceName': 'Tips',
        'type': 'add',
        'amount': 0,
      },
      {
        'serviceId': '3',
        'serviceName': 'Tax',
        'type': 'add',
        'amount': 0,
      },
    ],
    'total': 1277.493,
  },
];

export { testPayers, testBillList, testServices, testDetailedTotals, testDetailedTotalsWithServices };
