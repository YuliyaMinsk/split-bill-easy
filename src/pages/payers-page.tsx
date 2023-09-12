import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { PayerList } from '@/widgets/payer-list';

import { Header } from '@shared/ui/header';
import { Footer } from '@shared/ui/footer';

function PayersPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={t('Payers')} />
      <Container sx={{ mt: '1rem', mb: '6rem' }}>
        <PayerList />
      </Container>
      <Footer />
    </Container>
  );
}

export { PayersPage };
