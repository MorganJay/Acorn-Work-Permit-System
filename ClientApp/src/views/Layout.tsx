import { FC, ReactNode } from 'react';
import { Container } from 'reactstrap';

import NavMenu from '../components/NavMenu';
import NavProfileMenu from '../components/NavProfileMenu';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex min-vh-100">
      <NavMenu />
      <main className="d-flex flex-column w-100 min-vw-sm-100">
        <NavProfileMenu />
        <Container className="h-100 mx-0 align-self-center">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout;
