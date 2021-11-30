import { FC } from 'react';

// Components
import Sidebar from './Sidebar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
