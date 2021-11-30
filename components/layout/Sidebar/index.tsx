import { FC } from 'react';

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
        <SidebarSocialIcon>Twitter</SidebarSocialIcon>
        <SidebarSocialIcon>Github</SidebarSocialIcon>
        <SidebarSocialIcon>Medium</SidebarSocialIcon>
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
