import { Logo, NavLink, NavLinks, NavbarContainer } from "./NavBar.style";

const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo>Mobile Store</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default NavBar;
