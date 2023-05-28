import { List } from '@mui/material';

import { Payer } from '@shared/types';
import { PayerListItem } from '../payer-list-item';

type PayerListProps = {
  payerList: Payer[];
  AddComponent: JSX.Element;
  RemoveComponent: (index: number) => JSX.Element;
  newPayer: string;
  onNewPayerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPayerChange: (index: number, newValue: string) => void;
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
      {payerList.map((payer, index) => (
        <PayerListItem
          key={payer.id}
          payer={payer}
          ActionComponent={RemoveComponent(index)}
          onPayerChange={onPayerChange}
          index={index}
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
