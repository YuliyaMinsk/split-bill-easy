import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { PayerList } from '@/entities/payer/payer-list';

import { Header, Footer } from '@shared/ui';

function PayersPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={t('Payers')} />
      <PayerList />
      <Footer />
    </Container>
  );
}

export { PayersPage };
