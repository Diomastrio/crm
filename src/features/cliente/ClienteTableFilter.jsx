import TableOperations from "../../ui/TableOperations";
import { Filter, SecondFilter,ThirdFilter,ForthFilter, FiltersWrapper } from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

import {useDisciplina} from "../disciplinas/useSelectDisciplina";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function ArticuloTableFilter() {
  const { isLoading, disciplina } = useDisciplina();
  
  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplinas" />;

  const filterOptions = disciplina.map((disciplinaItem, index) => ({
    value: disciplinaItem.Nombre,
    label: disciplinaItem.Nombre,
    key: `disciplina_${index}` 
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
            { value: "all", label: "Todos"},
            ...filterOptions, 
          ]}
        />
        <ThirdFilter
          id=""
          filterField="anio"
          options={[
            { value: "all", label: "Todos" },
            { value: "2017", label: "2017" },
            { value: "2018", label: "2018" },
            { value: "2019", label: "2019" },
            { value: "2020", label: "2020" },
            { value: "2021", label: "2021" },
            { value: "2022", label: "2022" },
            { value: "2023", label: "2023" },
            { value: "2024", label: "2024" },
          ]}
        />

         <ForthFilter
          id=""
          filterField="mes"
          options={[
            { value: "all", label: "Todos" },
            { value: "January", label: "Enero" },
            { value: "February", label: "Febrero" },
            { value: "March", label: "Marzo" },
            { value: "April", label: "Abril" },
            { value: "May", label: "Mayo" },
            { value: "June", label: "Junio" },
            { value: "July", label: "Julio" },
            { value: "September", label: "Septiembre" },
            { value: "October", label: "Octubre" },
            { value: "November", label: "Noviembre" },
            { value: "December", label: "Diciembre" },
          ]}
        />
      </FiltersWrapper>

      <SortBy
        id="s"
        options={[
          { value: "nombre-asc", label: "Ordenar por nombre (A-Z)" },
          { value: "nombre-desc", label: "Ordenar por nombre (Z-A)" },
          { value: "diplomados_terminados-asc", label: "Diplomados Terminados Ascendente",},
          {  value: "diplomados_terminados-desc", label: "Diplomados Terminados Descendente",},
        ]}
      />
    </TableOperations>
  );
}

export default ArticuloTableFilter;