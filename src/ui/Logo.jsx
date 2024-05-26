import styled, { keyframes } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

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
  height: 9.6rem;
  width: auto;
  animation: ${spin} infinite 20s linear; /* Animation properties */
  animation-play-state: running; /* Initially paused */

  &:hover {
    animation-play-state: running; /* Start animation on hover */
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/bluelogo.png" : "/tealogo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
