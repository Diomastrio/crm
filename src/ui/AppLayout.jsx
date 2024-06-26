import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 6.8rem 1fr;
  grid-template-rows: auto 1fr;
  height: 150vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 2rem 2rem 3rem;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;