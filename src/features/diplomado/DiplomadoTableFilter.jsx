import TableOperations from "../../ui/TableOperations";
import {SecondFilter} from "../../ui/Filter";
import {useDisciplina} from "../disciplinas/useSelectDisciplina";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function DiplomadoTableFilter() {
  const { isLoading, disciplina } = useDisciplina();

  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplinas" />;

 const listaDisciplinas = disciplina.map((disciplina,index) => (
  {  key:{index}, value: disciplina, label: disciplina.Nombre, disciplina: "true", }
))

  return (
    <TableOperations>
<SecondFilter
        id=""
        filterField="nombre"
        options={[
          { value: "Todos", label: "Todos", disciplina: "true", },
          ...listaDisciplinas.map((item) => ({ value: item.value, label: item.label, disciplina: "true" }))        ]}
      />
    </TableOperations>
  );
}

export default DiplomadoTableFilter;
