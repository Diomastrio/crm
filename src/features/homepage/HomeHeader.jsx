import styled, { keyframes } from "styled-components";
//import Button from "../../ui/Button";
//import { useNavigate } from "react-router-dom";
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

const Img2 = styled.img`
  height: 6rem;
  width: auto;
  position: absolute;
  left: 12rem;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/bluelogo.png" : "/tealogo.png";
  const src2 =  "/Midiplomado.png";
  
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <Img2 src={src2} alt="Logo2" />

    </StyledLogo>
  );
}

const StyledHeaderMenu = styled.ul`
  height: 6.1rem;
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  //const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <Logo />
      {/* <li>
        <Button variation="swapii" onClick={() => navigate("/Registro")}>Crear cuenta</Button>
      </li> */}
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

const StyledHeader = styled.header`
  background-color: #ffffff;
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
