import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ArticuloTableFilter() {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letterOptions = Array.from(alphabet).map((letter) => ({
    value: `letter-${letter}`,
    label: letter,
  }));
  
  return (
    <TableOperations>
      <Filter id=''
        filterField="precio"
        options={[
          { value: "all", label: "Todos" },
          { value: "activos", label: "Activos" },
          { value: "inactivos", label: "Inactivos" },
          { value: "semana", label: "SE VENCE" },

          ...letterOptions,
        ]}
      />

      <SortBy id='s'
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)",},
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)",},
          { value: "diplomados_terminados-asc", label: "Diplomados Terminados Mas",},
          { value: "diplomados_terminados-desc", label: "Diplomados Terminados Menos",},

        ]}
      />
    </TableOperations>
  );
}

export default ArticuloTableFilter;
