import styled from "styled-components";
import Home from "./Home";

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
      </Main>
    </>
  );
}

export default HomeMain;
