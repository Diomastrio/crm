import { useDisciplina } from "../features/disciplinas/useSelectDisciplina";
import DisciplinaTable from "../features/disciplinas/DisciplinaTable";

import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

import CreateDisciplina from "../features/agregarDisciplina/CreateDisciplina";

function Clientes() {
  const { isLoading, disciplina } = useDisciplina();
  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplina" />;

  return (
    <>
      <Row type="vertical">
        <Row type="horizontal" style={{ justifyContent: 'start', gap: '10px'}}>
        <Heading as="h1">Disciplinas</Heading>
        <CreateDisciplina />     
        </Row>
      </Row>
      <DisciplinaTable/> 
    </>
  );
}

export default Clientes;
