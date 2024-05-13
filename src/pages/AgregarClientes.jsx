import AddClient from "../features/cliente/AddClient";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AgregarCliente() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Agrega Cliente</Heading>
      </Row>
      <AddClient />
    </>
  );
}

export default AgregarCliente;
