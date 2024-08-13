import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100%;
    z-index: 9999999;
    background-color: #cbcaca;
    display: flex;
    justify-content: space-between; // Space out children to push items to the edges
    align-items: center; // Vertically center items
    padding: 0 20px; // Add some padding to the sides
`;

export const StyledHeaderLogo = styled.div`
    width: 92px;
    margin-right: 36px;
    img {
        width: 100%;
        height: 100%;
    }
`

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-top: 10px;
  position: relative;
  z-index: 9999;
  padding-bottom: 10px;
`;
export const StyledNav = styled.nav`
  display: block;
  @media screen and (max-width: 999px) {
    display: none;
  }
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

export const StyledMenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 700px) {
        display: block;
        position: fixed;
        right: 40px;
    }
`
export const MenuPhone = styled.div`
    display: none;
    @media screen and (max-width: 700px) {
        display: block;
        position: absolute;
        right: 10px;
    }
`

export const LoginButton = styled.button`
    background-color: #2d772d;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    @media screen and (max-width: 700px) {
        display: none;
    }
    &:hover {
        background-color: rgba(45, 119, 45, 0.67);
    }
    &:focus {
        outline: none;
    }
`;