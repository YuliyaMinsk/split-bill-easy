import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = (): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Split Bill Easy</Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
