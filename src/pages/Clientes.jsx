import ClientTableFilter from "../features/cliente/ClienteTableFilter";
import { useCliente } from "../features/cliente/useSelectCliente";
import ClientTable from "../features/cliente/ClientesTable";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

function Clientes() {
  const { isLoading, cliente } = useCliente();
  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Clientes</Heading>
        <ClientTableFilter />
      </Row>
      <ClientTable />
    </>
  );
}

export default Clientes;
