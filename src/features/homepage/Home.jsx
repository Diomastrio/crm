import styled from "styled-components";
// import home from "../../img/Midiplomado.jpg";
import Button from "../../ui/Button";
import Midiplomado from "/Midiplomado.png";
import { useNavigate } from "react-router-dom";

const HomeSection = styled.section`
position: relative;
background-color: #ffffff;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${Midiplomado});
background-size: cover;
background-position: center;
z-index: 0; 

/*&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1; /* add negative z-index to ::before pseudo-element */
}*/
  
`;

const HomeMain = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #000;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeSection>
      <div>
        <HomeMain>Bienvenidos a Midiplomado.com</HomeMain>
        <Button
          variation="midiplomado"
          size="large"
          onClick={() => navigate("/AgregarProspecto")}
        >
          Iniciar Registro
        </Button>
      </div>
    </HomeSection>
  );
}

export default Home;
