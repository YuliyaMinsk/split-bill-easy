import { Container, List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Header } from '../shared/ui/header';
import { Footer } from '../shared/ui/footer';

function MainPage() {
  const { t, i18n } = useTranslation();

  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <Container sx={{ mt: '1rem' }}>
        <List>
          <ListItem>1 {t('Welcome to React')}</ListItem>
          <ListItem>2 {t('Welcome to React')}</ListItem>
        </List>
      </Container>
      <Footer />
    </Container>
  );
}

export { MainPage };
