import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineCopyright,
} from "react-icons/ai";
const StyledFooter = styled.footer`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 7rem;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Homefooter() {
  return (
    <>
      <StyledFooter>
        <Link to="https://www.instagram.com/swapiioficial/">
          <AiOutlineInstagram style={{fontSize:'40px', marginTop:'10px'}}/>
        </Link>
        <Link to="https://twitter.com/Swapiioficial">
          <AiFillTwitterCircle style={{fontSize:'40px', marginTop:'10px'}}/>
        </Link>
        <span>Universidad Tecnologica de Durango</span>{" "}
        <span>swapii@gmail.com</span>
        <AiOutlineCopyright style={{fontSize:'25px', marginTop:'10px'}}/>
      </StyledFooter>
    </>
  );
}

export default Homefooter;
