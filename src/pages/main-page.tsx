import { useTranslation } from 'react-i18next';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { MainLayout } from '@shared/ui';

function MainPage() {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('Split Bill Easy')}>
      <Box sx={{ m: '1rem', mb: '6rem' }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mb: '2rem' }}>
          {t('Welcome to "Split Bill Easy"!')}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {t('Say goodbye to the hassle of dividing restaurant bills! Our app makes it simple and quick:')}
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary={t('1. Payers Tab')} secondary={t("Add everyone who's sharing the bill.")} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={t('2. Items Tab')}
              secondary={t('Enter each item on the bill, who ordered it, and how the cost is split.')}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={t('3. Calculations Tab')}
              secondary={t('Add any extra charges like service fees or tips.')}
            />
          </ListItem>
        </List>

        <Typography variant="body1">
          {t(
            'Then, just copy and share the final breakdown with your friends. Enjoy your meal without the awkward math! 🍽️👍',
          )}
        </Typography>
      </Box>
    </MainLayout>
  );
}

export { MainPage };
