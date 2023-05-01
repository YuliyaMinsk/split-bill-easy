import { Container, List, ListItem } from '@mui/material';

import { Header } from '../shared/ui/header';
import { Footer } from '../shared/ui/footer';

function MainPage() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <List>
        <ListItem>1 Test information</ListItem>
        <ListItem>2 Test information</ListItem>
      </List>
      <Footer />
    </Container>
  );
}

export { MainPage };
