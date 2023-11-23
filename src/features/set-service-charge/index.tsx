import { useState } from 'react';
import { List } from '@mui/material';

import { FieldWithPercent } from '@/shared/ui';

const SERVICE_NAMES = [
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

type Service = {
  name: string;
  value: number;
};

type ServiceChargeProps = {
  name?: string;
};

const ServiceCharge = ({ name }: ServiceChargeProps): JSX.Element => {
  const [services, setServices] = useState<Service[]>(() =>
    SERVICE_NAMES.map((service) => ({
      name: service.name,
      value: 0,
    })),
  );

  const handleUpdateValue = (name: string, value: number) => {
    const newServices = services.map((service) => {
      if (service.name === name) {
        return {
          ...service,
          value,
        };
      }

      return service;
    });

    setServices(newServices);
  };

  return (
    <List>
      {services.map((service) => (
        <FieldWithPercent name={service.name} value={'0'} updateValue={handleUpdateValue} />
      ))}
    </List>
  );
};

export { ServiceCharge };
