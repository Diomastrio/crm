
import Menus from "../../ui/Menus";
import DinamicGraphs from "./DynamicGraphs";
import GraphFilterRow2 from "./GraphFilterRow2";
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
      let filterValue = searchParams.get("grafica2") || "2017";
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

     //anios 
     let secondFilterValue = searchParams.get("mes2") || "all";
     let passesSecondFilterValue;
     let smth = (new Date(cliente.fecha_inicio))
     let cliente_mes = smth.getUTCMonth()
     let smth2 
     let cliente_mes2

     if(cliente.fecha_inicio2)
     {smth2 = (new Date(cliente.fecha_inicio2))
     cliente_mes2 = smth2.getUTCMonth()}
     let mes 
     switch (secondFilterValue) {
       case 'all': 
       passesSecondFilterValue = (cliente);            
        break;          
       case secondFilterValue:
        mes = ( new Date(`Mon ${secondFilterValue} 01 2000`))
        mes = mes.getUTCMonth();  
        passesSecondFilterValue = (mes===cliente_mes || mes===cliente_mes2);            
        break;
       default:
        passesSecondFilterValue = true;
     }
     

      return (passesFilterValue && passesSecondFilterValue);
    });
  };

  const filteredClientes = handleFilter(cliente.cliente);
  const  Numero = 2
  return (
    <Menus> 
      <GraphFilterRow2/>
      {filteredClientes.length ? (
         <> <DinamicGraphs data={filteredClientes} n={Numero} grafico={grafico}/></>
        ) : (
          <div style={{padding: '4rem'}}>
          <CenteredText>No se encontraron clientes con estas caracteristicas</CenteredText>
        </div>        )}
    </Menus>
  );
}

export default DinamicRow;
