import { List } from '@mui/material';
import { PayerListItem } from '../payer-list-item';
import { Payer } from '../../../../shared/types';

type PayerListProps = {
  payerList: Payer[];
  AddComponent: JSX.Element;
  RemoveComponent: (index: number) => JSX.Element;
  newPayer: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PayerList = ({
  payerList,
  AddComponent,
  RemoveComponent,
  newPayer,
  onInputChange,
}: PayerListProps): JSX.Element => {
  return (
    <List>
      {payerList.map((payer, index) => (
        <PayerListItem key={payer.id} payer={payer} ActionComponent={RemoveComponent(index)} />
      ))}
      <PayerListItem
        key={'new-payer'}
        payer={{ id: 'new-payer', name: newPayer }}
        onInputChange={onInputChange}
        ActionComponent={AddComponent}
      />
    </List>
  );
};

export { PayerList };
