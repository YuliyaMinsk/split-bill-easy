import { useTranslation } from 'react-i18next';
import { Container, List, ListItem } from '@mui/material';

import { Header } from '@shared/ui/header';
import { Footer } from '@shared/ui/footer';

function MainPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={t('Split Bill Easy')} />
      <Container sx={{ mt: '1rem', mb: '6rem' }}>
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
