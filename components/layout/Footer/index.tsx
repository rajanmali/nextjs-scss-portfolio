import { FC } from 'react';

// Styles
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcon,
  FooterFooterHeading,
} from './Footer.styles';

// Constants
import { navItems, socialItems } from 'constants/index';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        {socialItems.map((item) => (
          <a
            href={item.path}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            className="social-icon__link"
          >
            <FooterSocialIcon color={item.color}>{item.icon}</FooterSocialIcon>
          </a>
        ))}
      </FooterSocialWrapper>
      <FooterFooterHeading>
        Rajan Mali © {new Date().getFullYear()}
      </FooterFooterHeading>
    </FooterWrapper>
  );
};

export default Footer;
