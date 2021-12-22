import React from 'react';

import { MenuIcon, CloseIcon } from 'components/icons';
import {
  NavStyled,
  UlStyled,
  LiStyled,
  SpanStyled,
  IconButton,
} from './styles';

export interface NavItemProps {
  id: string | number;
  name: string;
  link: string;
}

export interface NavbarProps {
  items: NavItemProps[];
  handleClick?: () => void;
}

export const Navbar: React.FC = () => {
  const [isClosed, setClosed] = React.useState(true);
  const handleClose = () => setClosed(!isClosed);

  const navbarItems: NavItemProps[] = [
    {
      id: 'about',
      name: 'About',
      link: '/about',
    },
    {
      id: 'blog',
      name: 'Blog',
      link: '/blog',
    },
    {
      id: 'contact',
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <NavStyled>
      <UlStyled>
        {navbarItems.map(opt => (
          <LiStyled key={opt.id}>
            <SpanStyled>{opt.name}</SpanStyled>
          </LiStyled>
        ))}
      </UlStyled>
      <IconButton
        aria-label="Close menu"
        type="button"
        title="Close menu"
        onClick={handleClose}
      >
        {isClosed ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
    </NavStyled>
  );
};
