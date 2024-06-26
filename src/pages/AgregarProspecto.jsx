import CreateProspecto from "../features/agregarProspecto/CreateProspecto";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ProspectoHeader from "../features/agregarProspecto/ProspectoHeader";

function Prospecto() {
  return (
    <>
    <ProspectoHeader/>
      <Row type="horizontal" style={{ backgroundColor: '#24242c'}}>
        <Heading as="prospecto" style={{ color: '#fff'}}>¡Empecemos con el proceso! </Heading>
        <CreateProspecto />
      </Row>
    </>
  );
}

export default Prospecto;
