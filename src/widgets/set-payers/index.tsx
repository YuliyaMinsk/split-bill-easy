import { useState } from 'react';
import { IconButton, List, ListItem, TextField } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const payersFake = ['Сергей', 'Алена', 'Марат', 'Алихан'];

const SetPayers = (): JSX.Element => {
  const [payerList, setPayerList] = useState<string[]>(payersFake);

  return (
    <List>
      {payerList.map((payer) => (
        <ListItem key={payer}>
          <TextField id="outlined-basic" fullWidth sx={{ mr: 1 }} defaultValue={payer} />
          <IconButton aria-label="add">
            <AddCircleOutline />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export { SetPayers };
