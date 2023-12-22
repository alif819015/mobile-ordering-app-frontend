import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #97237a;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  @media (max-width: 600px) {
    margin-top: 10px;
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #18265e;
  }

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;
