import styled from "styled-components";
import work from "../../img/work.jpg";

const AboutSection = styled.section`
background-color: #fff;
padding: 5rem 0;
justify-content: center;
align-items: center;
background-image: url(${work});
background-size: cover;
background-position: center;
padding-left: 2rem;
z-index: 1; /* add negative z-index to ::before pseudo-element */


position: relative;
 
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1; /* add negative z-index to ::before pseudo-element */
}
`;

const AboutHeader = styled.h2`
  padding-left: 3rem;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutParagraph = styled.p`
  padding-left: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const AboutList = styled.ul`
  padding-left: 3rem;
  list-style: none;
  margin-bottom: 2rem;
`;

const AboutListItem = styled.li`
  padding-left: 3rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

function About() {
  return (
    <AboutSection>
      <AboutHeader>Nosotros</AboutHeader>
      <AboutParagraph>Quienes somos nosotros</AboutParagraph>
      <AboutList>
        <AboutListItem>
          Somos un equipo de estudiantes de la utd que hemos creado esta pagina
          web como un e-commerce local dentro de la utd para compra y venta de
          productos
        </AboutListItem>
        <AboutListItem>
          Nuestra misión es brindar servicios de alta calidad a nuestros
          clientes.
        </AboutListItem>
        <AboutListItem>
          Creemos en la colaboración y la comunicación abierta.
        </AboutListItem>
      </AboutList>
    </AboutSection>
  );
}
export default About;
