import AddClient from "../features/quickAddCliente/QAClient";
import AddProspecto from "../features/quickAddCliente/QAProspecto";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cliente() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Quick add Prospecto</Heading>
      </Row>
      <AddProspecto />
      <Row type="horizontal">
        <Heading as="h1">Quick add Cliente</Heading>
      </Row>
      <AddClient />
    </>
  );
}

export default Cliente;
