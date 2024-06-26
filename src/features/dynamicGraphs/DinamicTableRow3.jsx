
import Menus from "../../ui/Menus";
import DinamicGraphs from "./DynamicGraphs";
import GraphFilterRow3 from "./GraphFilterRow3";

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
      let filterValue = searchParams.get("grafica3") || "2017";
      let passesFilterValue;
      let algo = (new Date(cliente.fecha_inicio))
      let cliente_inicio = algo.getFullYear()
      let anio 
      switch (filterValue) {
        case filterValue:
         anio = ( new Date(`Mon Jan 01 ${filterValue}`))
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
  const  Numero = 3

  return (
    <Menus> 
      {filteredClientes.length ? (
         <><GraphFilterRow3/> <DinamicGraphs data={filteredClientes} n={Numero} grafico={grafico}/></>
        ) : (
          <div style={{padding: '4rem'}}>
          <CenteredText>No se encontraron clientes con estas caracteristicas</CenteredText>
        </div>
        )}
    </Menus>
  );
}

export default DinamicRow;
