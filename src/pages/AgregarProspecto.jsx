import CreateProspecto from "../features/agregarProspecto/CreateProspecto";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ProspectoHeader from "../features/agregarProspecto/ProspectoHeader";

function Prospecto() {
  return (
    <>
    <ProspectoHeader/>
      <Row type="horizontal" style={{ backgroundColor: 'var(--color-grey-50)'}}>
        <Heading as="h1">¡Empecemos con el proceso! </Heading>
        <CreateProspecto />
      </Row>
    </>
  );
}

export default Prospecto;
