import { Link } from "react-router-dom";
import styled from "styled-components";
import {AiFillFacebook ,AiOutlineCopyright} from "react-icons/ai";

const StyledFooter = styled.footer`
  background-color: #24242c;
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
        <Link to="https://www.facebook.com/midiplomado">
          <AiFillFacebook  style={{fontSize:'40px', marginTop:'10px'}}/>
        </Link>
        <span>Derechos Reservados por MiDiplomado.com</span>
        <AiOutlineCopyright style={{fontSize:'25px', marginTop:'10px'}}/>
        <span>2023</span>
      </StyledFooter>
    </>
  );
}

export default Homefooter;