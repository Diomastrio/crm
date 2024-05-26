import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import UsuarioCreado from "../features/authentication/UsuarioCreado";

const LoginLayout = styled.main`
  height: 130vh;
  display: grid;
  grid-template-columns: 60rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
// import HomeHeader from "../features/homepage/HomeHeader";
// import HomeMain from "../features/homepage/HomeMain";
// import Homefooter from "../features/homepage/Homefooter";
function Homepage() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Crea una cuenta</Heading>
      <SignupForm />
      <UsuarioCreado />
    </LoginLayout>
  );
}

export default Homepage;
