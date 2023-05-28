import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type HeaderProps = {
  text?: string;
};

const Header = ({ text }: HeaderProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant="h6" component="h1">
          {text || t('Split Bill Easy')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
