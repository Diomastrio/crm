
import Menus from "../../ui/Menus";
import DinamicGraphs from "./DynamicGraphs";
import GraphFilterRow1 from "./GraphFilterRow1";
import styled from 'styled-components';

import { useSearchParams } from "react-router-dom";

const CenteredText = styled.p`
text-align: center;
color:#F8A964;
`;

function DinamicRow(cliente) {
  const grafico= cliente.grafico
  const [searchParams] = useSearchParams();

  // 1) FILTER
  const handleFilter = (clientes) => {
    return clientes.filter((cliente) => {

      //FILTROS
      let filterValue = searchParams.get("grafica1") || "all";
      let passesFilterValue;
      let algo = (new Date(cliente.fecha_inicio))
      let cliente_inicio = algo.getFullYear()
      let anio 
      switch (filterValue) {
        case "2017":
         anio = ( new Date('Mon Jan 01 2017'))
         anio = anio.getFullYear();  
         passesFilterValue = (anio===cliente_inicio);            
         break;
        case "2018":
           anio = ( new Date('Mon Jan 01 2018'))
          anio = anio.getFullYear();  
          passesFilterValue = (anio===cliente_inicio);            
          break;
        case "2019":
          anio = ( new Date('Mon Jan 01 2019'))
          anio = anio.getFullYear();  
          passesFilterValue = (anio===cliente_inicio);        
          break;
        case "2020":
          anio = ( new Date('Mon Jan 01 2020'))
          anio = anio.getFullYear();  
          passesFilterValue = (anio===cliente_inicio);        
          break;
        case "2021":
          anio = ( new Date('Mon Jan 01 2021'))
          anio = anio.getFullYear();  
          passesFilterValue = (anio===cliente_inicio);        
          break;
        case "2022":
          anio = ( new Date('Mon Jan 01 2022'))
          anio = anio.getFullYear();  
          passesFilterValue = (anio===cliente_inicio);        
          break;
        case "2023":
          anio = ( new Date('Mon Jan 01 2023'))
          anio = anio.getFullYear();  
          passesFilterValue = (anio===cliente_inicio);        
          break;
        case "2024":
            anio = ( new Date('Mon Jan 01 2024'))
            anio = anio.getFullYear();  
            passesFilterValue = (anio===cliente_inicio);        
            break;
        default:
          passesFilterValue = true;
      }

      return (passesFilterValue);
    });
  };

  const filteredClientes = handleFilter(cliente.cliente);
  const Numero = 1

  return (
    <Menus > 
      {filteredClientes.length ? (
         <><GraphFilterRow1 /> <DinamicGraphs data={filteredClientes} n={Numero} grafico={grafico}/></>
        ) : (
          <CenteredText>No se encontraron clientes con estas caracteristicas</CenteredText>
        )}
    </Menus>
  );
}

export default DinamicRow;
