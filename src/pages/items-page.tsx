import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AddPointBill } from '@/features/add-point-bill-item';

import { DishList } from '@/entities/dish/dish-list';

import { Header } from '@shared/ui/header';
import { Footer } from '@shared/ui/footer';

function ItemsPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={t('Items')} />
      <Box sx={{ mt: '1rem', ml: 1, mr: 1, mb: '6rem' }}>
        <DishList />
      </Box>
      <Box sx={{ mt: '1rem', ml: 0, mr: 0, mb: '6rem' }}>
        <AddPointBill />
      </Box>
      <Footer />
    </Container>
  );
}

export { ItemsPage };
