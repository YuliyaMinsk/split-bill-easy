import { useTranslation } from 'react-i18next';
import { Container, List, ListItem } from '@mui/material';

import { MainLayout } from '@shared/ui';

function MainPage() {
  const { t } = useTranslation();

  return (
    <MainLayout title={t('Split Bill Easy')}>
      <Container sx={{ mt: '1rem', mb: '6rem' }}>
        <List>
          <ListItem>1 {t('Welcome to React')}</ListItem>
          <ListItem>2 {t('Welcome to React')}</ListItem>
        </List>
      </Container>
    </MainLayout>
  );
}

export { MainPage };
