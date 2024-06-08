import CreateClient from "../features/agregarCliente/CreateClient";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cliente() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Modulo Agregar Cliente</Heading>
      </Row>
      <CreateClient />
    </>
  );
}

export default Cliente;
