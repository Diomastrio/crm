import Tipos from "../features/suscripcion/suscripcion";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Suscripcion() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Opciones de suscrpción</Heading>
      </Row>
      <Tipos />
    </>
  );
}

export default Suscripcion;
