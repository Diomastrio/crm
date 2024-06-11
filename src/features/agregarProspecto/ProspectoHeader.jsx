import styled, { keyframes } from "styled-components";
import DarkModeToggle from "../../ui/DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
  position: absolute;
  left: 2rem;

  animation: ${spin} infinite 10s linear; /* Animation properties */
  animation-play-state: running; /* Initially paused/running */
  &:hover {
    animation-play-state: paused; /* Start animation on hover */
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/bluelogo.png" : "/bluelogo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

const StyledHeaderMenu = styled.ul`
  height: 6rem;
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <Logo />
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-grey-50);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function HomeHeader() {
  return (
    <>
      <StyledHeader>
        <HeaderMenu />
      </StyledHeader>
    </>
  );
}
export default HomeHeader;
