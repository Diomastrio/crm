import TableOperations from "../../ui/TableOperations";
import {SecondFilter} from "../../ui/Filter";

function DiplomadoTableFilter() {
  return (
    <TableOperations>
<SecondFilter
        id=""
        filterField="nombre"
        options={[
          { value: "Todos", label: "Todos", disciplina: "true", },
          { value: "Desarrollo Humano", label: "Desarrollo Humano", disciplina: "true", },
          { value: "Descuentos", label: "Descuentos", disciplina: "true", },
          { value: "Educación", label: "Educación", disciplina: "true", },
          { value: "Ingeniería", label: "Ingeniería", disciplina: "true", },
          { value: "Negocios", label: "Negocios", disciplina: "true", },
          { value: "OnLive", label: "OnLive", disciplina: "true", },
          { value: "Psicología", label: "Psicología", disciplina: "true", },
          { value: "Salud", label: "Salud", disciplina: "true", },
        ]}
      />
    </TableOperations>
  );
}

export default DiplomadoTableFilter;
