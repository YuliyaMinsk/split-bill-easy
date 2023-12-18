import { useTranslation } from 'react-i18next';

import { CopyPaymentSummary } from '@/features/copy-payment-summary';
import { ServiceCharge } from '@/features/set-service-charge';

import { PayerListForCalculation } from '@/entities/payer/payer-list-for-calculation';

import { MainLayout } from '@shared/ui';

function CalculationsPage() {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('Calculations')}>
      <ServiceCharge />
      <CopyPaymentSummary />
      <PayerListForCalculation />
    </MainLayout>
  );
}

export { CalculationsPage };
