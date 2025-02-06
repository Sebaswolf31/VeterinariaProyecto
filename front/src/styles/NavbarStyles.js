import styled from "styled-components";

export const Nav = styled.nav`
  background: #52b788;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 10; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 50px; 
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 60px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  text-decoration-line: none; 
  text-decoration-color: transparent; 
  font-size: 21px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: #d8f3dc;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.a`
  background: white;
  color: #52b788;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  text-decoration-line: none; 
  text-decoration-color: transparent; 
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #d8f3dc;
  }
`;