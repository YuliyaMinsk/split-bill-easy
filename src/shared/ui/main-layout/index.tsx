import styled from '@emotion/styled';
import { Container, Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

import { Footer, Header } from '@shared/ui';

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 4rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 10px 0 0 0;
  }
`;

interface MainLayoutProps {
  children: ReactNode;
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <Container maxWidth="sm" disableGutters sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header text={title} />
      <StyledPaper>{children}</StyledPaper>
      <Footer />
    </Container>
  );
};

export { MainLayout };
