import styled from "styled-components";
import home from "../../img/home.jpg";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const HomeSection = styled.section`
position: relative;
background-color: #f7f7f7;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${home});
background-size: cover;
background-position: center;
z-index: 0; 

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1; /* add negative z-index to ::before pseudo-element */
}
  
`;

const HomeMain= styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`;


function Home() {
  const navigate = useNavigate();

  return (
    <HomeSection>
    <div>
      <HomeMain>Bienvenidos a miTitulo.com</HomeMain>
      <Button variation="secondary"  size="large" onClick={() => navigate("/AgregarProspecto")}>Iniciar Registro</Button>
    </div>
  </HomeSection>
  );
}

export default Home;
