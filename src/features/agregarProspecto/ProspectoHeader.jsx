import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
  left: 12rem;
`;

const Img2 = styled(Img)`
  left: 2rem;

  animation: ${spin} infinite 10s linear; /* Animation properties */
  animation-play-state: running; /* Initially paused/running */
  &:hover {
    animation-play-state: paused; /* Start animation on hover */
  }
`;



function Logo() {

  const src =  "/bluelogo.png";
  const src2 =  "/Midiplomado.png";

  return (
    <StyledLogo>
      <Img src={src2} alt="Logo2" />
      <Img2 src={src} alt="Logo" />
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
       <Link to="https://midiplomado.com.mx">
        <Logo />
        </Link>
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
