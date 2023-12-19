import { Container, Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

import { Footer, Header } from '@shared/ui';

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <Container maxWidth="sm" disableGutters sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header text={title} />
      <Paper sx={{ padding: '20px', mb: '4rem', flexGrow: 1, overflow: 'auto' }}>{children}</Paper>
      <Footer />
    </Container>
  );
};

export { MainLayout };
