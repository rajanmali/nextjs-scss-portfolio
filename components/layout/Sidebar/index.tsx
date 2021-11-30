import { FC } from 'react';

// Icons
import { FiTwitter, FiGithub } from 'react-icons/fi';
import { FaMediumM } from 'react-icons/fa';

// Styles
import {
  SidebarWrapper,
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
  return (
    <SidebarWrapper>
      <SidebarLogo />
      <SidebarNavWrapper>
        <SidebarNavMenu>
          <SidebarMenuItem>Home</SidebarMenuItem>
          <SidebarMenuItem>About</SidebarMenuItem>
          <SidebarMenuItem>Profile</SidebarMenuItem>
          <SidebarMenuItem>Contact</SidebarMenuItem>
        </SidebarNavMenu>
      </SidebarNavWrapper>
      <SidebarSocialWrapper>
        <SidebarSocialIcon>
          <FiTwitter />
        </SidebarSocialIcon>
        <SidebarSocialIcon>
          <FiGithub />
        </SidebarSocialIcon>
        <SidebarSocialIcon>
          <FaMediumM />
        </SidebarSocialIcon>
      </SidebarSocialWrapper>
      <SidebarFooter>
        <SidebarFooterHeading>
          Copyright {new Date().getFullYear()} | Rajan Mali
        </SidebarFooterHeading>
      </SidebarFooter>
    </SidebarWrapper>
  );
};

export default Sidebar;
