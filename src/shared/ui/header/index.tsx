import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="h1">
          {t('Split Bill Easy')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
