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
      <Filter
        filterField="precio"
        options={[
          { value: "all", label: "Todos" },
          ...letterOptions,
        ]}
      />

      <SortBy
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)",},
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)",},
        ]}
      />
    </TableOperations>
  );
}

export default ArticuloTableFilter;
