import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountCircle from '@mui/icons-material/AccountCircle';

const HeaderMenu = (): JSX.Element => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isLanguageMenuOpen = Boolean(languageMenuAnchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLanguageMenuAnchorEl(null);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    handleMenuClose();
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        aria-controls={isMenuOpen ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={handleMenuOpen}
        color="inherit"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        disableScrollLock={true}
      >
        <MenuItem onClick={handleLanguageMenuOpen}>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText primary={t('Choose language')} />
        </MenuItem>
        <Menu
          anchorEl={languageMenuAnchorEl}
          open={isLanguageMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>{t('English')}</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('rus')}>{t('Russian')}</MenuItem>
        </Menu>

        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={t('Profile')} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export { HeaderMenu };
