import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ArticuloTableFilter() {
  return (
    <TableOperations>
      <Filter
        id=""
        filterField="nombre"
        options={[
          { value: "all", label: "Todos" },
          { value: "activos", label: "Activos" },
          { value: "inactivos", label: "Inactivos" },
        ]}
      />

      <SortBy
        id="s"
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)" },
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)" },
          { value: "activos", label: "Clientes activos" },
        ]}
      />
    </TableOperations>
  );
}

export default ArticuloTableFilter;
