import TableOperations from "../../ui/TableOperations";
import {SecondFilter} from "../../ui/Filter";
import {useDisciplina} from "../disciplinas/useSelectDisciplina";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

  function DiplomadoTableFilter() {
    const { isLoading, disciplina } = useDisciplina();
  
    if (isLoading) return <Spinner />;
    if (!disciplina.length) return <Empty resourceName="disciplinas" />;
  
    // Dynamically generate options based on the fetched discipline data
    const filterOptions = disciplina.map((disciplinaItem) => ({
      value: disciplinaItem.Nombre,
      label: disciplinaItem.Nombre,
      disciplina: "true",
    }));
  
    return (
      <TableOperations>
        <SecondFilter
          id=""
          filterField="nombre"
          options={[
            { value: "Todos", label: "Todos", disciplina: "true" },
            ...filterOptions, // Include the dynamically generated options here
          ]}
        />
      </TableOperations>
    );
  }
  

export default DiplomadoTableFilter;
