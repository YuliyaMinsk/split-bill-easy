import { ReactNode } from 'react';
import { Container } from '@mui/material';

import { Footer, Header } from '@shared/ui';

type MainLayoutProps = {
  children: ReactNode;
  title: string;
};

const MainLayout = ({ children, title }: MainLayoutProps): JSX.Element => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Header text={title} />
      {children}
      <Footer />
    </Container>
  );
};

export { MainLayout };
