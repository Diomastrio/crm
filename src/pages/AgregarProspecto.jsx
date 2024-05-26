import CreateProspecto from "../features/agregarProspecto/CreateProspecto";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Prospecto() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Empecemos con el proceso! </Heading>
      </Row>
      <CreateProspecto />
    </>
  );
}

export default Prospecto;
