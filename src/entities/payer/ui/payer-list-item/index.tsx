import { ListItem, TextField } from '@mui/material';
import { Payer } from '../../../../shared/types';

type PayerListItemProps = {
  payer: Payer;
  ActionComponent: JSX.Element;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PayerListItem = ({ payer, ActionComponent, onInputChange }: PayerListItemProps): JSX.Element => {
  return (
    <ListItem key={payer.id}>
      <TextField id="outlined-basic" fullWidth sx={{ mr: 1 }} value={payer.name} onChange={onInputChange} />
      {ActionComponent}
    </ListItem>
  );
};

export { PayerListItem };
