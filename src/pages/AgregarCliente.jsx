import CreateClient from "../features/agregarCliente/CreateClient";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cliente() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Formulario Agregar Cliente</Heading>
      </Row>
      <CreateClient />
    </>
  );
}

export default Cliente;
