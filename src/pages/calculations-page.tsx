import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ServiceCharge } from '@/features/set-service-charge';
import { CopyPaymentSummary } from '@/features/copy-payment-summary';

import { PayerListForCalculation } from '@/entities/payer/payer-list-for-calculation';

import { Header, Footer } from '@shared/ui';

function CalculationsPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={t('Calculations')} />
      <ServiceCharge />
      <CopyPaymentSummary />
      <PayerListForCalculation />
      <Footer />
    </Container>
  );
}

export { CalculationsPage };
