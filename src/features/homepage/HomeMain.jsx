import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 2.8rem 4.4rem;
  overflow: scroll;
`;

function HomeMain() {
  return (
    <>
      <Main>
        <Home />
        <About />
        <Work id="work" />
        <Contact />
      </Main>
    </>
  );
}

export default HomeMain;
