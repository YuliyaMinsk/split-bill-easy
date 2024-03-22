import CheckIcon from '@mui/icons-material/Check';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, styled } from '@mui/material';

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { API_URL } from '@/shared/constants';
import { Currency } from '@/shared/enums';
import { LanguageKey } from '@/shared/i18n/i18n';
import { RootState } from '@/shared/store';
import { clearBill } from '@/shared/store/bill/bill-slice';
import { changeLanguage, changeCurrency } from '@/shared/store/profile/profile-slice';
import { clearServices } from '@/shared/store/service/service-slice';

import { SnackbarTop } from '../snackbar-top';

type MenuItem = {
  isDivider?: boolean;
  icon?: React.ReactNode;
  label?: string | null;
  action?: () => void;
  value?: LanguageKey | Currency;
  styletype?: 'dangerous';
  submenu?: MenuItem[];
};

const DangerousMenuItem = styled(MenuItem)<{ styletype?: string }>`
  & {
    color: ${(props) => (props.styletype === 'dangerous' ? 'red' : 'inherit')};
  }
`;

const HeaderMenu: FC = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const { language: currentLanguage, currency: currentCurrency } = useSelector((state: RootState) => state.profile);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: t('Choose language:'),
      submenu: [
        { label: 'English', action: () => handleLanguageChange('en'), value: 'en' },
        { label: 'Русский', action: () => handleLanguageChange('ru'), value: 'ru' },
      ],
    },
    {
      label: t('Choose currency:'),
      submenu: [
        { label: t('Kazakhstani Tenge'), action: () => handleCurrencyChange(Currency.KZT), value: Currency.KZT },
        { label: t('Russian Ruble'), action: () => handleCurrencyChange(Currency.RUB), value: Currency.RUB },
        { label: t('Belarusian Ruble'), action: () => handleCurrencyChange(Currency.BYN), value: Currency.BYN },
      ],
    },
    { isDivider: true },
    { label: t('Copy link to share app'), action: () => handleCopyToShare() },
    { isDivider: true },
    { label: t('Clear Items and Services'), action: () => handleClearItemsAndServices(), styletype: 'dangerous' },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, items: MenuItem[]) => {
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

  const handleCopyToShare = async () => {
    const result = `${API_URL}\n\n${t('Instruction to add app to Home screen')}`;
    try {
      await navigator.clipboard.writeText(result);
      setOpenSnackbar(true);
      handleMenuClose();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleClearItemsAndServices = () => {
    dispatch(clearBill());
    dispatch(clearServices());
    handleMenuClose();
  };

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  const isItemSelected = (item: MenuItem): boolean => {
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
        {currentMenu.map((item, index) =>
          item.isDivider ? (
            <Divider key={`divider-${index}`} />
          ) : (
            [
              <DangerousMenuItem
                key={`item-${index}`}
                onClick={item.action}
                disabled={!item.action}
                styletype={item.styletype}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.label} />
              </DangerousMenuItem>,
              item.submenu?.map((subItem, subIndex) => (
                <MenuItem key={`subitem-${index}-${subIndex}`} onClick={subItem.action}>
                  <ListItemIcon style={{ visibility: isItemSelected(subItem) ? 'visible' : 'hidden' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={subItem.label} />
                </MenuItem>
              )),
            ]
          ),
        )}
      </Menu>
      <SnackbarTop open={openSnackbar} handleClose={handleClose} message={t('App Link copied to clipboard')} />
    </div>
  );
};

export { HeaderMenu };
