import CheckIcon from '@mui/icons-material/Check';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';

import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Currency } from '@/shared/enums';
import { LanguageKey } from '@/shared/i18n/i18n';
import { RootState } from '@/shared/store';
import { changeLanguage, changeCurrency } from '@/shared/store/profile/profile-slice';

interface IMenuItem {
  label: string;
  icon?: React.ReactNode;
  action?: () => void;
  submenu?: IMenuItem[];
  value?: LanguageKey | Currency;
}

const HeaderMenu = (): JSX.Element => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const { language: currentLanguage, currency: currentCurrency } = useSelector((state: RootState) => state.profile);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[]>([]);

  const menuItems: IMenuItem[] = [
    {
      label: t('Choose language:'),
      submenu: [
        { label: t('English'), action: () => handleLanguageChange('en'), value: 'en' },
        { label: t('Russian'), action: () => handleLanguageChange('rus'), value: 'rus' },
      ],
    },
    {
      label: t('Choose currency:'),
      submenu: [
        { label: t('Kazakhstani Tenge'), action: () => handleCurrencyChange(Currency.KZT), value: Currency.KZT },
        { label: t('Russian Ruble'), action: () => handleCurrencyChange(Currency.RUB), value: Currency.RUB },
      ],
    },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, items: IMenuItem[]) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(items);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu([]);
  };

  const handleLanguageChange = (language: LanguageKey) => {
    i18n.changeLanguage(language);
    dispatch(changeLanguage(language));
    handleMenuClose();
  };

  const handleCurrencyChange = (currency: Currency) => {
    dispatch(changeCurrency(currency));
    handleMenuClose();
  };

  const isItemSelected = (item: IMenuItem): boolean => {
    return item.value === currentLanguage || item.value === currentCurrency;
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        aria-controls={anchorEl ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={(e) => handleMenuOpen(e, menuItems)}
        color="inherit"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="basic-menu"
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        disableScrollLock={true}
      >
        {currentMenu.map((item, index) => (
          <Fragment key={index}>
            <MenuItem disabled>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.label} />
            </MenuItem>
            {item.submenu?.map((subItem, subIndex) => (
              <MenuItem key={subIndex} onClick={subItem.action}>
                <ListItemIcon style={{ visibility: isItemSelected(subItem) ? 'visible' : 'hidden' }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary={subItem.label} />
              </MenuItem>
            ))}
          </Fragment>
        ))}
      </Menu>
    </div>
  );
};

export { HeaderMenu };
