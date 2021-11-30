import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background: #222;

  color: white;

  width: 15%;
  margin: 0;

  padding: 0 20px;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 768px) {
    width: 100%;

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const SidebarLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .sidebar__menu-toggle {
    transform: scale(0);
  }

  @media only screen and (max-width: 768px) {
    .sidebar__menu-toggle {
      transform: scale(1);
    }
  }
`;

export const SidebarLogo = styled.h1`
  cursor: pointer;

  transition: all 0.2s ease;

  margin: 12px 0;

  &:hover {
    color: #ffefcb;
    text-shadow: 2px 2px 2px rgba(255, 0, 0, 1);
  }
`;

export const SidebarNavWrapper = styled.div<{ showDrawer: boolean }>`
  margin: 14px 0;
  transition: all 0.2s ease;

  @media only screen and (max-width: 768px) {
    display: ${(props) => {
      return props.showDrawer ? 'block' : 'none';
    }};
  }
`;

export const SidebarNavMenu = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const SidebarMenuItem = styled.li<{ active?: boolean }>`
  cursor: pointer;

  transition: all 0.2s ease;

  margin: 8px 0;
  padding: 0;

  font-size: 18px;

  color: ${(props) => (props.active ? '#ffdb8a' : '')};
  text-shadow: ${(props) =>
    props.active ? '0 0 1px rgba(255, 0, 0, 0.2)' : ''};

  &:hover {
    color: #ffefcb;
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);
  }

  @media only screen and (max-width: 768px) {
    margin-right: 24px;
  }
`;

export const SidebarSocialWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 8px 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarSocialIcon = styled.div<{ color: string }>`
  cursor: pointer;
  margin-right: 14px;

  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.color};
    filter: ${(props) => `drop-shadow(1px 1px 1px ${props.color})`};
  }
`;

export const SidebarFooter = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarFooterHeading = styled.p`
  color: #999;
  font-size: 14px;
  font-weight: 800;
`;
