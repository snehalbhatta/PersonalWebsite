import styled from "styled-components";
// import ButtonIcon from "./ButtonIcon";
// import { HiOutlineUser } from "react-icons/hi2";
// import DarkModeToggle from "./DarkModeToggle";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const DarkMode = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    &:hover{
        color: var(--color-brand-600);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }



  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-600);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function HeaderMenu() {

  return (
    <StyledHeaderMenu>
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to="/about">
                        <span>About</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/experience">
                        <span>Experience</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/projects">
                        <span>Projects</span>
                    </StyledNavLink>
                </li>
                <li>
                    <DarkMode>
                        <DarkModeToggle/>
                    </DarkMode>
                </li>
            </NavList>
        </nav>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;