import { Container } from '@mui/material';

import { Header } from '../shared/ui/header';
import { Footer } from '../shared/ui/footer';
import { SetPayers } from '../widgets/set-payers';

function PayersPage() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header text={'Payers'} />
      <Container sx={{ mt: '1rem' }}>
        <SetPayers />
      </Container>
      <Footer />
    </Container>
  );
}

export { PayersPage };
