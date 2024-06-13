import TableOperations from "../../ui/TableOperations";
import { Filter, SecondFilter, FiltersWrapper } from "../../ui/Filter";

function GraphFilter() {
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
            { value: "Hombres", label: "Hombres" },
            { value: "Mujeres", label: "Mujeres" },
          ]}
        />
        <SecondFilter
          id=""
          filterField="disciplina"
          options={[
            { value: "all", label: "Todas" },
            { value: "desarrollo", label: "Desarrollo Humano", disciplina: "true",},
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
    </TableOperations>
  );
}

export default GraphFilter;
