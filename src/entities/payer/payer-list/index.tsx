import { List } from '@mui/material';

import { Payer } from '@shared/types';
import { PayerListItem } from '../payer-list-item';

type PayerListProps = {
  payerList: Payer[];
  AddComponent: JSX.Element;
  RemoveComponent: (id: string) => JSX.Element;
  newPayer: string;
  onNewPayerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPayerChange: (id: string, newValue: string) => void;
};

const PayerList = ({
  payerList,
  AddComponent,
  RemoveComponent,
  newPayer,
  onNewPayerChange,
  onPayerChange,
}: PayerListProps): JSX.Element => {
  return (
    <List>
      {payerList.map((payer) => (
        <PayerListItem
          key={payer.id}
          payer={payer}
          ActionComponent={RemoveComponent(payer.id)}
          onPayerChange={onPayerChange}
        />
      ))}
      <PayerListItem
        key={'new-payer'}
        payer={{ id: 'new-payer', name: newPayer }}
        onNewPayerChange={onNewPayerChange}
        ActionComponent={AddComponent}
      />
    </List>
  );
};

export { PayerList };
