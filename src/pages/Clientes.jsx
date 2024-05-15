import AddClient from "../features/cliente/AddClient";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cliente() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Agregar Cliente</Heading>
      </Row>
      <AddClient />
    </>
  );
}

export default Cliente;
