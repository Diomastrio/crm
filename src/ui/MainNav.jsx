import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdAddBox } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.7rem;
    font-weight: 500;
    padding: 2.5rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 3.3rem;
    height: 3.3rem;
    color: var(--color-grey-500);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/Cliente">
            <BsFillPersonLinesFill />
            <span>Clientes</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/AgregarCliente">
            <MdAddBox />
            <span>Agrega Cliente</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Prospectos">
            <BsFillPersonLinesFill />
            <span>Prospectos</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/PDF">
            <MdAddBox />
            <span>PDF</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Graphs">
            <FaChartPie />
            <span>Graficas</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
