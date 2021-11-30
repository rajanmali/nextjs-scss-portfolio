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

// Constants
import { navItems, socialItems } from 'constants/index';

const Sidebar: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

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
          <a
            href={item.path}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            className="social-icon__link"
          >
            <SidebarSocialIcon color={item.color}>
              {item.icon}
            </SidebarSocialIcon>
          </a>
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
