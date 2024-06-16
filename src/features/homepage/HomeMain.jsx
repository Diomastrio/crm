import styled from "styled-components";
import Home from "./Home";

const Main = styled.main`
  background-color: #24242c;
  padding: 2rem 2.8rem 4.4rem;
  overflow: scroll;
`;

function HomeMain() {
  return (
    <>
      <Main>
        <Home />
      </Main>
    </>
  );
}

export default HomeMain;
