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
      <StyledFooter/>
    </>
  );
}

export default Homefooter;
