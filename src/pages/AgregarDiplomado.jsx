import CreateDiplomado from "../features/agregarDiplomado/CreateDiplomado";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Prospecto() {
  return (
    <>
      <Row type="horizontal" style={{ backgroundColor: 'var(--color-grey-50)'}}>
        <CreateDiplomado />
      </Row>
    </>
  );
}

export default Prospecto;
