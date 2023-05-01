import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = (): JSX.Element => {
  return (
    <AppBar position="sticky" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6">Split Bill Easy</Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
