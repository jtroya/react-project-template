import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import Navbar from './Navbar';

export interface RouteProps {
  id: string | number;
  name: string;
  link: string;
}

export interface AppbarProps {
  items: RouteProps[];
  handleClick?: () => void;
}

export const Appbar: React.FC<AppbarProps> = ({ items }: AppbarProps) => {
  const theme = useTheme();

  const HeaderStyled = styled.header`
    box-sizing: border-box;
    grid-area: header;
    background-color: ${theme.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0px 20px;
  `;

  const AppLogoStyled = styled.div`
    > a {
      color: #fff;
    }
  `;

  console.info(items);

  return (
    <HeaderStyled>
      <AppLogoStyled>
        <a href="#">APP</a>
      </AppLogoStyled>
      <Navbar />
    </HeaderStyled>
  );
};
