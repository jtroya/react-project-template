import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import Appbar from './Appbar';
import { RouteProps } from './Appbar';

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();
  const Container = styled.div`
    display: grid;
    grid-template-rows: 40px 1fr 40px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'content'
      'footer';
    min-height: 100vh;
    padding: 0px;
    margin: 0;
  `;

  // max-width: container;
  const Main = styled.main`
    grid-area: content;
    padding: 1rem;
    margin: auto;
    text-align: left;
  `;

  const Footer = styled.footer`
    box-sizing: border-box;
    grid-area: footer;
    text-align: center;
    background-color: ${theme.primary};
    height: 40px;
    padding: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > span {
      padding: 0px;
      margin: 0px;
    }
  `;

  const appRoutes: RouteProps[] = [
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
    <Container>
      <Appbar items={...appRoutes} />
      <Main>{children}</Main>
      <Footer>
        <span>Footer</span>
      </Footer>
    </Container>
  );
};

export default Layout;
