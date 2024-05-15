import styled from "styled-components";
import home from "../../img/home.jpg";

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
z-index: 1; /* add z-index to parent */

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

function Home() {
  return (
    <HomeSection>
      <div>
      </div>
    </HomeSection>
  );
}

export default Home;
