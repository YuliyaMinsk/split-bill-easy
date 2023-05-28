import { ListItem, TextField } from '@mui/material';
import { Payer } from '@shared/types';

type PayerListItemProps = {
  payer: Payer;
  ActionComponent: JSX.Element;
  onNewPayerChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPayerChange?: (index: number, newValue: string) => void;
  index?: number;
};

const PayerListItem = ({
  payer,
  ActionComponent,
  onNewPayerChange,
  onPayerChange,
  index,
}: PayerListItemProps): JSX.Element => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onNewPayerChange) {
      onNewPayerChange(event);
    }
    if (onPayerChange && index !== undefined) {
      onPayerChange(index, event.target.value);
    }
  };

  return (
    <ListItem key={payer.id}>
      <TextField id="outlined-basic" fullWidth sx={{ mr: 1 }} value={payer.name} onChange={handleInputChange} />
      {ActionComponent}
    </ListItem>
  );
};

export { PayerListItem };
