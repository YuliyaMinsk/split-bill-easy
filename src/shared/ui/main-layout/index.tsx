import { Container, Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

import { Footer, Header } from '@shared/ui';

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={title} />
      <Paper sx={{ padding: '20px', mb: '4rem' }}>{children}</Paper>
      <Footer />
    </Container>
  );
};

export { MainLayout };
