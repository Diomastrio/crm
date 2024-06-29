import ClientTableFilter from "../features/cliente/ClienteTableFilter";
import { useCliente } from "../features/cliente/useSelectCliente";
import ClientTable from "../features/cliente/ClientesTable";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";

import CreateClient from "../features/agregarCliente/CreateClient";
import CreateReportPDF from "../features/pdf/CreatePDF";
import CreateBD from "../features/pdf/CreateBD";

function Clientes() {
  const { isLoading } = useCliente();
  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="vertical">
      <Heading as="h1">Clientes</Heading>

      <Row type="horizontal" style={{ justifyContent: 'start', gap: '10px'}}>
        <CreateClient/>       
        <CreateReportPDF  />
        <CreateBD  />
        </Row>
        <ClientTableFilter />
      </Row>
      <ClientTable />
    </>
  );
}

export default Clientes;
