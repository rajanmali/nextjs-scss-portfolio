// Icons
import { FiTwitter, FiGithub, FiMenu } from 'react-icons/fi';
import { FaMediumM, FaWindowClose } from 'react-icons/fa';

export const navItems = [
  { id: 'nav-item-0', label: 'Home', path: '/' },
  { id: 'nav-item-1', label: 'About', path: '/about' },
  { id: 'nav-item-2', label: 'Portfolio', path: '/portfolio' },
  { id: 'nav-item-3', label: 'Contact', path: '/contact' },
];

export const socialItems = [
  {
    id: 'social-item-0',
    color: '#00acee',
    icon: <FiTwitter />,
    path: 'https://twitter.com/notrajanmali',
  },
  {
    id: 'social-item-1',
    color: '#6e5494',
    icon: <FiGithub />,
    path: 'https://github.com/rajanmali',
  },
  {
    id: 'social-item-2',
    color: '#66CDAA',
    icon: <FaMediumM />,
    path: 'https://medium.com/@notrajanmali',
  },
];
