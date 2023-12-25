type ServiceFeeAdjustments = {
  name: string;
  type: 'add' | 'subtract';
};

type FeeType = 'percentage' | 'fixed';

type Service = ServiceFeeAdjustments & {
  id: string;
  value: number;
  feeType?: FeeType;
};

export type { Service, ServiceFeeAdjustments, FeeType };
