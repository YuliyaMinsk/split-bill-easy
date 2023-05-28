import { Container, TextField } from '@mui/material';

const Dish = (): JSX.Element => {
  return (
    <Container>
      <TextField id="outlined-basic" fullWidth sx={{ mr: 1 }} />
      <TextField id="outlined-basic" fullWidth sx={{ mr: 1 }} />
      <TextField id="outlined-basic" fullWidth sx={{ mr: 1 }} />
    </Container>
  );
};

export { Dish };
