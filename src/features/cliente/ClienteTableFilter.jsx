import TableOperations from "../../ui/TableOperations";
import { Filter, SecondFilter, FiltersWrapper } from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ArticuloTableFilter() {
  return (
    <TableOperations>
      <FiltersWrapper>
        <Filter
          id=""
          filterField="nombre"
          options={[
            { value: "all", label: "Todos" },
            { value: "activos", label: "Activos" },
            { value: "inactivos", label: "Inactivos" },
            { value: "frecuentes", label: "Clientes frecuentes" },
            { value: "vence", label: "Vence Pronto" },
          ]}
        />
        <SecondFilter
          id=""
          filterField="disciplina"
          options={[
            { value: "all", label: "Todas" },
            {
              value: "desarrollo",
              label: "Desarrollo Humano",
              disciplina: "true",
            },
            { value: "descuentos", label: "Descuentos", disciplina: "true" },
            { value: "educacion", label: "Educación", disciplina: "true" },
            { value: "ingenieria", label: "Ingeniería", disciplina: "true" },
            { value: "negocios", label: "Negocios", disciplina: "true" },
            { value: "onLive", label: "OnLive", disciplina: "true" },
            { value: "psicologia", label: "Psicología", disciplina: "true" },
            { value: "salud", label: "Salud", disciplina: "true" },
          ]}
        />
      </FiltersWrapper>
      <SortBy
        id="s"
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)" },
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)" },
          {
            value: "diplomados_terminados-asc",
            label: "Diplomados Terminados Mas",
          },
          {
            value: "diplomados_terminados-desc",
            label: "Diplomados Terminados Menos",
          },
        ]}
      />
    </TableOperations>
  );
}

export default ArticuloTableFilter;