import DiplomadoTableFilter from "../features/diplomado/DiplomadoTableFilter";
import { useDiplomado } from "../features/diplomado/useSelectDiplomado";
import DiplomadoTable from "../features/diplomado/DiplomadoTable";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

import CreateDiplomado from "../features/agregarDiplomado/CreateDiplomado";

function Clientes() {
  const { isLoading, diplomado } = useDiplomado();
  if (isLoading) return <Spinner />;
  if (!diplomado.length) return <Empty resourceName="diplomados" />;

  return (
    <>
      <Row type="vertical">
        <Row type="horizontal">
        <Heading as="h1">Diplomados</Heading>
        <CreateDiplomado />     
        </Row>
        <DiplomadoTableFilter />
      </Row>
      <DiplomadoTable />
    </>
  );
}

export default Clientes;
