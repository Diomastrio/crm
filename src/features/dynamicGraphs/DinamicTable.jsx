import { useCliente } from "./useSelectCliente";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import DinamicTableRow from "./DinamicTableRow";
import DinamicTableRow2 from "./DinamicTableRow2";
import DinamicTableRow3 from "./DinamicTableRow3";
import styled from 'styled-components';

import { useSearchParams } from "react-router-dom";

import { Container, Section } from "../../ui/dynamicGraphs";

const CenteredText = styled.p`
text-align: center;
color:#F8A964;
`;

function ClienteTable(grafico) {
  grafico = grafico.grafico

  const { isLoading, cliente } = useCliente();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  // 1) FILTER
  const handleFilter = (clientes) => {
    return clientes.filter((cliente) => {

      //FILTROS
      let filterValue = searchParams.get("nombre") || "all";
      let passesFilterValue;
      switch (filterValue) {
        case "activos":
          passesFilterValue = cliente.cursa_actualmente === true;
          break;
        case "inactivos":
          passesFilterValue = cliente.cursa_actualmente === false;
          break;
        case "frecuentes":
          passesFilterValue = cliente.numero_diplomados > 3;
          break;
        case "vence":
          const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
          const oneWeekThen = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
          passesFilterValue = (new Date(cliente.fecha_limite) < oneWeekFromNow ) && (new Date(cliente.fecha_limite)> oneWeekThen);
          break;
        case "Hombres":
          passesFilterValue = cliente.genero === 'H';
          break;  
        case "Mujeres":
          passesFilterValue = cliente.genero === 'M';
          break;  
        default:
          passesFilterValue = true;
      }

      //diplomados
      let secondFilterValue = searchParams.get("disciplina") || "all";
      let passesSecondFilterValue;
      switch (secondFilterValue) {
        case "desarrollo":
          passesSecondFilterValue = cliente.disciplina === "Desarrollo Humano" || cliente.disciplina2 === "Desarrollo Humano";
          break;
        case "descuentos":
          passesSecondFilterValue = cliente.disciplina === "Descuentos" || cliente.disciplina2 === "Descuentos";
          break;
        case "educacion":
          passesSecondFilterValue = cliente.disciplina === "Educación" || cliente.disciplina2 === "Educación";
          break;
        case "ingenieria":
          passesSecondFilterValue = cliente.disciplina === "Ingeniería" || cliente.disciplina2 === "Ingeniería";
          break;
        case "negocios":
          passesSecondFilterValue = cliente.disciplina === "Negocios" || cliente.disciplina2 === "Negocios";
          break;
        case "onLive":
          passesSecondFilterValue = cliente.disciplina === "OnLive" || cliente.disciplina2 === "OnLive";
          break;
        case "psicologia":
          passesSecondFilterValue = cliente.disciplina === "Psicología" || cliente.disciplina2 === "Psicología";
          break;
        case "salud":
          passesSecondFilterValue = cliente.disciplina === "Salud" || cliente.disciplina2 === "Salud";
          break;
        default:
          passesSecondFilterValue = true;
      }

      return (
        passesFilterValue &&
        passesSecondFilterValue &&
        passesSecondFilterValue
      );
    });
  };

  const filteredClientes = handleFilter(cliente);

  return (
    <Menus> 
      {filteredClientes.length ? (
         <Container>
         <Section> <DinamicTableRow  cliente={filteredClientes}  grafico={grafico}/></Section>
 
         <Section> <DinamicTableRow2 cliente={filteredClientes} grafico={grafico}/></Section>
 
         <Section> <DinamicTableRow3 cliente={filteredClientes} grafico={grafico}/></Section>
       </Container>
        ) : (
          <CenteredText>No se encontraron clientes con estas caracteristicas</CenteredText>
        )}
    </Menus>
  );
}

export default ClienteTable;
