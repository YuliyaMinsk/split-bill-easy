import { List } from '@mui/material';

import { FieldWithPercent } from '@/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store';
import { updateServices } from '@/shared/store/service/service-slice';

const ServiceCharge = (): JSX.Element => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state: RootState) => state.services);

  const handleUpdateValue = (name: string, value: number) => {
    const serviceToUpdate = serviceList.find((service) => service.name === name);
    if (serviceToUpdate) {
      dispatch(updateServices({ ...serviceToUpdate, value }));
    }
  };

  return (
    <List>
      {serviceList.map((service) => (
        <FieldWithPercent name={service.name} value={'0'} updateValue={handleUpdateValue} />
      ))}
    </List>
  );
};

export { ServiceCharge };
