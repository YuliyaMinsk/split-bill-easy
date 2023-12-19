import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AddPointBill } from '@/features/add-point-bill';

import { DishList } from '@/entities/dish/dish-list';

import { MainLayout } from '@shared/ui';

const ItemsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('Items')}>
      <DishList />
      <AddPointBill />
    </MainLayout>
  );
};

export { ItemsPage };
