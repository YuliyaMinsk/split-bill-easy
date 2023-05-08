import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type HeaderProps = {
  text?: string;
};

const Header = ({ text }: HeaderProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="h1">
          {text || t('Split Bill Easy')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
