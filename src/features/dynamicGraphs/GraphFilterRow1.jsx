import TableOperations from "../../ui/TableOperations";
import { GraphicFilter,SecondGraphicFilter, FiltersWrapper } from "../../ui/Filter";

function GraphFilterRow1() {
  return (
    <TableOperations>
      <FiltersWrapper>
        <GraphicFilter
          id="5"
          filterField="grafica1"
          options={[
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

         <SecondGraphicFilter
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
    </TableOperations>
  );
}

export default GraphFilterRow1;
