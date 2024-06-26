import TableOperations from "../../ui/TableOperations";
import {SecondFilter} from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

import {useDisciplina} from "../disciplinas/useSelectDisciplina";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function ProspectoTableFilter() {
  const { isLoading, disciplina } = useDisciplina();
  
  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplinas" />;

  // Dynamically generate options based on the fetched discipline data
  const filterOptions = disciplina.map((disciplinaItem, index) => ({
    value: disciplinaItem.Nombre,
    label: disciplinaItem.Nombre,
    key: `disciplina_${index}` // Unique key for each item
  }));
  return (
    <TableOperations>
    <SecondFilter
          id=""
          filterField="nombre"
          options={[
            { value: "all", label: "Todos", disciplina: "true" },
            ...filterOptions, 
          ]}
        />
      <SortBy
        id="s"
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)" },
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)" },
          { value: "diplomados_terminados-asc", label: "Diplomados Terminados Ascendente",},
          { value: "diplomados_terminados-desc", label: "Diplomados Terminados Descendente",},
        ]}
      />
    </TableOperations>
  );
}

export default ProspectoTableFilter;
