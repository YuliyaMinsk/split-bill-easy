import { List } from '@mui/material';

import { FieldWithPercent } from '@/shared/ui';

const SERVICES = [
  {
    name: 'Service Charge',
  },
  {
    name: 'Tips',
  },
  {
    name: 'Discount',
  },
  {
    name: 'Tax',
  },
];

type ServiceChargeProps = {
  name?: string;
};

const ServiceCharge = ({ name }: ServiceChargeProps): JSX.Element => {
  return (
    <List>
      {SERVICES.map((service) => (
        <FieldWithPercent name={service.name} value={0} />
      ))}
    </List>
  );
};

export { ServiceCharge };
