import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    width: 100%;

    background: #222;
    color: white;

    padding: 12px 20px;
  }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  margin: 8px 0;

  .social-icon__link {
    color: white;
    text-decoration: none;
  }
`;
export const FooterSocialIcon = styled.div`
  margin-right: 14px;
`;
export const FooterFooterHeading = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 800;

  margin: 8px 0;
`;
