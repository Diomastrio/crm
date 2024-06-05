import CreatePDF from "../features/pdf/CreatePDF";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function PDF() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Reporte clientes PDF </Heading>
      </Row>
      <CreatePDF />
    </>
  );
}

export default PDF;
