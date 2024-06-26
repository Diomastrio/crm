import AddClient from "../features/quickAddCliente/QuickAddClient";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cliente() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Quick add Cliente</Heading>
      </Row>
      <AddClient />
    </>
  );
}

export default Cliente;
