import { useTranslation } from 'react-i18next';

import { AddPointBill } from '@/features/add-point-bill';

import { DishList } from '@/entities/dish/dish-list';

import { MainLayout } from '@shared/ui';

function ItemsPage() {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('Items')}>
      <DishList />
      <AddPointBill />
    </MainLayout>
  );
}

export { ItemsPage };
