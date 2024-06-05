import TableOperations from "../../ui/TableOperations";
import {SecondFilter} from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ProspectoTableFilter() {
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
      <SortBy
        id="s"
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)" },
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)" },
          { value: "diplomados_terminados-asc", label: "Diplomados Terminados Mas",},
          { value: "diplomados_terminados-desc", label: "Diplomados Terminados Menos",},
        ]}
      />
    </TableOperations>
  );
}

export default ProspectoTableFilter;
