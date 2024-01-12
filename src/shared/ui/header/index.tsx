import { AppBar, Link as MuiLink, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppRoutes } from '@/shared/enums';
import { HeaderMenu } from '@/shared/ui';
import { createPath } from '@/shared/utils';

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <HeaderMenu />
        <Typography variant="h6" component="h1">
          <MuiLink
            component={RouterLink}
            to={createPath(AppRoutes.HOME)}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {text}
          </MuiLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
