import CreateProspecto from "../features/agregarProspecto/CreateProspecto";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Prospecto() {
  return (
    <>
      <Row type="horizontal" style={{ backgroundColor: 'var(--color-grey-0)'}}>
        <Heading as="h1">¡Empecemos con el proceso! </Heading>
        <CreateProspecto />
      </Row>
    </>
  );
}

export default Prospecto;
