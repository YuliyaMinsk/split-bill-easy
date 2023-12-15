import { ReactNode } from 'react';
import { Container, Paper } from '@mui/material';

import { Footer, Header } from '@shared/ui';

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

const MainLayout = ({ children, title }: MainLayoutProps): JSX.Element => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={title} />
      <Paper style={{ padding: '20px', marginTop: '20px' }}>{children}</Paper>
      <Footer />
    </Container>
  );
};

export { MainLayout };
