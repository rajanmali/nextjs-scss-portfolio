import { FC } from 'react';

// Components
import Sidebar from './Sidebar';

// Styles
import { LayoutWrapper } from './Layout.styles';

const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
