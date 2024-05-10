import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ArticuloTableFilter() {
  return (
    <TableOperations>
      <div>
    </div>
      <Filter
        filterField="precio"
        options={[
          { value: "all", label: "Todos" },
          // { value: "no-discount", label: "No descuento" },
          // { value: "with-discount", label: "Con descuento" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Ordenar por nombre (A-Z)",},
          { value: "name-desc", label: "Ordenar por nombre (Z-A)",},
          { value: "precio-asc", label: "Ordenar por precio (Mas bajo primero)",},
          { value: "precio-desc",label: "Ordenar por precio (Mas alto primero)",},
        ]}
      />
    </TableOperations>
  );
}

export default ArticuloTableFilter;
