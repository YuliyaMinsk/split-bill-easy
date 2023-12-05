type ServiceFeeAdjustments = {
  name: string;
  type: 'add' | 'subtract';
};

type Service = ServiceFeeAdjustments & {
  id: string;
  value: number;
};

export type { Service, ServiceFeeAdjustments };
