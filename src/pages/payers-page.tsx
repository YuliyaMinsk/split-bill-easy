import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PayerList } from '@/entities/payer/payer-list';

import { MainLayout } from '@shared/ui';

const PayersPage: FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('Payers')}>
      <PayerList />
    </MainLayout>
  );
};

export { PayersPage };
