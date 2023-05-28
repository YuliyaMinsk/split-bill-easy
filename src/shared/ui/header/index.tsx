import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" component="h1">
          {text}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
