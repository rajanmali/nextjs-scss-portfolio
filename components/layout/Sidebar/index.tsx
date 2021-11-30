import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Icons
import { FiTwitter, FiGithub, FiMenu } from 'react-icons/fi';
import { FaMediumM, FaWindowClose } from 'react-icons/fa';

// Styles
import {
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarNavWrapper,
  SidebarNavMenu,
  SidebarMenuItem,
  SidebarSocialWrapper,
  SidebarSocialIcon,
  SidebarFooter,
  SidebarFooterHeading,
} from './Sidebar.styles';

const Sidebar: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const navItems = [
    { id: 'nav-item-0', label: 'Home', path: '/' },
    { id: 'nav-item-1', label: 'About', path: '/about' },
    { id: 'nav-item-2', label: 'Portfolio', path: '/portfolio' },
    { id: 'nav-item-3', label: 'Contact', path: '/contact' },
  ];

  const socialItems = [
    { id: 'social-item-0', icon: <FiTwitter />, color: '#00acee' },
    { id: 'social-item-1', icon: <FiGithub />, color: '#6e5494' },
    { id: 'social-item-2', icon: <FaMediumM />, color: '#66CDAA' },
  ];

  console.log();

  return (
    <SidebarWrapper>
      <SidebarLogoWrapper>
        <Link href="/">
          <SidebarLogo>Bill Buttlicker</SidebarLogo>
        </Link>
        {showDrawer ? (
          <FaWindowClose
            onClick={toggleDrawer}
            className="sidebar__menu-toggle"
          />
        ) : (
          <FiMenu onClick={toggleDrawer} className="sidebar__menu-toggle" />
        )}
      </SidebarLogoWrapper>

      <SidebarNavWrapper showDrawer={showDrawer}>
        <SidebarNavMenu>
          {navItems.map((item) => (
            <Link href={item.path} key={item.id}>
              <SidebarMenuItem active={router.pathname === item.path}>
                {item.label}
              </SidebarMenuItem>
            </Link>
          ))}
        </SidebarNavMenu>
      </SidebarNavWrapper>
      <SidebarSocialWrapper>
        {socialItems.map((item) => (
          <SidebarSocialIcon key={item.id} color={item.color}>
            {item.icon}
          </SidebarSocialIcon>
        ))}
      </SidebarSocialWrapper>
      <SidebarFooter>
        <SidebarFooterHeading>
          Rajan Mali © {new Date().getFullYear()}
        </SidebarFooterHeading>
      </SidebarFooter>
    </SidebarWrapper>
  );
};

export default Sidebar;
