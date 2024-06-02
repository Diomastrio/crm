import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Actualizar cuenta</Heading>

      <Row>
        <Heading as="h3">Actualizar información</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Actualizar Contraseña</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
