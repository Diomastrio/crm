import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { BsFillPersonLinesFill,BsPersonBadge ,BsFillPersonPlusFill   } from "react-icons/bs";
import { FaChartPie,FaShippingFast  } from "react-icons/fa";
import { MdAssignmentAdd,MdAssignmentTurnedIn   } from "react-icons/md";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 20%;
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
    padding: 1.5rem 1.2rem;
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
    width: 2.3rem;
    height: 2.3rem;
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
const StyledNav = styled.nav`
  width: 200px; /* Adjust the width as needed */
`;

function MainNav() {
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/Cliente">
            <BsFillPersonLinesFill />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/AddCliente">
            <FaShippingFast  />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/AgregarCliente">
            <BsFillPersonPlusFill />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Prospectos">
            <BsPersonBadge   />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/PDF">
            <BsFileEarmarkPdfFill />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Graphs">
            <FaChartPie />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Diplomados">
            <MdAssignmentTurnedIn   />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/AgregarDiplomado">
            <MdAssignmentAdd />
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default MainNav;