import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '@shared/ui';

const MainPage: FC = () => {
  const { t } = useTranslation();

  const listItem = [
    { id: 1, text: t('1. Payers Tab'), secondary: t("Add everyone who's sharing the bill.") },
    {
      id: 2,
      text: t('2. Items Tab'),
      secondary: t('Enter each item on the bill, who ordered it, and how the cost is split.'),
    },
    {
      id: 3,
      text: t('3. Calculations Tab'),
      secondary: t(
        'Add any extra charges like service fees or tips. Note: The total amount may be slightly higher than the bill due to rounding.',
      ),
    },
  ];

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
          {listItem.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.text} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1" mb={2}>
          {t(
            'Then, just copy and share the final breakdown with your friends. Enjoy your meal without the awkward math! 🍽️👍',
          )}
        </Typography>
      </Box>
    </MainLayout>
  );
};

export { MainPage };
