import { ServiceFeeAdjustments } from '../types';

const SERVICE_FEE_ADJUSTMENTS: ServiceFeeAdjustments[] = [
  {
    name: 'Service Charge',
    type: 'add',
  },
  {
    name: 'Tips',
    type: 'add',
  },
  {
    name: 'Discount',
    type: 'subtract',
  },
  {
    name: 'Tax',
    type: 'add',
  },
];

export { SERVICE_FEE_ADJUSTMENTS };
