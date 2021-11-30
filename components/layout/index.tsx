import { FC } from 'react';

// Components
import Sidebar from './Sidebar';
import Footer from './Footer';

// Styles
import { LayoutWrapper } from './Layout.styles';

const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
