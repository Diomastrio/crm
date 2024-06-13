import TableOperations from "../../ui/TableOperations";
import { GraphicFilter, FiltersWrapper } from "../../ui/Filter";

function GraphFilterRow2() {
  return (
    <TableOperations>
      <FiltersWrapper>
        <GraphicFilter
          id="2"
          filterField="grafica2"
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
      </FiltersWrapper>
    </TableOperations>
  );
}

export default GraphFilterRow2;
