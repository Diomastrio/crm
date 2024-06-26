import TableOperations from "../../ui/TableOperations";
import { Filter, SecondFilter, FiltersWrapper } from "../../ui/Filter";

import {useDisciplina} from "../disciplinas/useSelectDisciplina";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function GraphFilter() {
  const { isLoading, disciplina } = useDisciplina();
  
  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplinas" />;

  const filterOptions = disciplina.map((disciplinaItem) => ({
    value: disciplinaItem.Nombre,
    label: disciplinaItem.Nombre,
  }));

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
            ...filterOptions, 
          ]}
        />
      </FiltersWrapper>
    </TableOperations>
  );
}

export default GraphFilter;
