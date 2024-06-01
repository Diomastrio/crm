import TableOperations from "../../ui/TableOperations";
import {Filter,SecondFilter,FiltersWrapper} from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ClienteTableFilter() {
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
          filterField="nombre"
          options={[
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
      </FiltersWrapper>
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

export default ClienteTableFilter;
