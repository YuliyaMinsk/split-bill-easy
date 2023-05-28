import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { SetPayers } from '@widgets/set-payers';

import { Header } from '@shared/ui/header';
import { Footer } from '@shared/ui/footer';

function PayersPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={t('Payers')} />
      <Container sx={{ mt: '1rem', mb: '6rem' }}>
        <SetPayers />
      </Container>
      <Footer />
    </Container>
  );
}

export { PayersPage };
