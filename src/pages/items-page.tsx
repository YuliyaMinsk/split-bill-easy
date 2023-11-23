import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AddPointBill } from '@/features/add-point-bill';

import { DishList } from '@/entities/dish/dish-list';

import { Header, Footer } from '@shared/ui';

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
