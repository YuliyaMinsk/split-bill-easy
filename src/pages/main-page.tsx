import { Container, List, ListItem } from '@mui/material';

import { Header } from '../shared/ui/header';
import { Footer } from '../shared/ui/footer';

function MainPage() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <Container>
        <List>
          <ListItem>1 Test information</ListItem>
          <ListItem>2 Test information</ListItem>
        </List>
      </Container>
      <Footer />
    </Container>
  );
}

export { MainPage };
