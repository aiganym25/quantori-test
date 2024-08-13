import styled from 'styled-components';
import Menu from '@mui/material/Menu';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 100%;
  z-index: 9999999;
`;

export const StyleHeaderMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 999px) {
    display: none;
  }
`;
export const StyledNav = styled.nav`
  display: block;
  @media screen and (max-width: 999px) {
    display: none;
  }
`;

export const StyleHeaderMenuItem = styled.li`
  padding: 0 15px;
  word-break: break-word;
  text-align: center;
  a {
    list-style: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  a:hover {
    border-bottom: 2px solid #fff !important;
  }
  @media screen and (max-width: 1400px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 10px;
  }
`;

