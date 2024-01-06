import { List } from '@mui/material';

import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { updateServices } from '@/shared/store/service/service-slice';
import { FeeType } from '@/shared/types';
import { FieldWithType } from '@/shared/ui';

const ServiceCharge: FC = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state: RootState) => state.services);

  const handleUpdateValue = (name: string, value: number, feeType: FeeType) => {
    const serviceToUpdate = serviceList.find((service) => service.name === name);

    if (serviceToUpdate) {
      dispatch(updateServices({ ...serviceToUpdate, value, feeType }));
    }
  };

  return (
    <List>
      {serviceList.map(({ id, name, feeType, value }) => (
        <FieldWithType
          key={id}
          name={name}
          feeType={feeType}
          value={String(value) || '0'}
          updateValue={handleUpdateValue}
        />
      ))}
    </List>
  );
};

export { ServiceCharge };
