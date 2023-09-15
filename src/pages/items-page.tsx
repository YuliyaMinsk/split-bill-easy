import { Container } from '@mui/material';
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
      <DishList />
      <AddPointBill />
      <Footer />
    </Container>
  );
}

export { ItemsPage };
