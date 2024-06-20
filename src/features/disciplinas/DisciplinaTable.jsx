import { useDisciplina  } from "./useSelectDisciplina";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import DiplomadoTableRow from "./DisciplinaTableRow";

import {
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
} from "../../ui/ClientTableUi";

import styled from 'styled-components';

const CenteredText = styled.p`
  text-align: center;
  color:#F8A964;
`;

function DiplomadoTable() {
  const { isLoading, disciplina } = useDisciplina();

  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplina" />;
  
  return (
    <Menus>
      <StyledTable style={{border:'none',width: '90vh',}}>
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableHeadCell>Disciplina</StyledTableHeadCell>
                <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>

      {disciplina.length ? (
          disciplina.map((diplomado) => (
            <DiplomadoTableRow diplomados={diplomado} key={diplomado.id} />
      ))
      ) : (
        <div style={{padding: '4rem'}}>
      <CenteredText>No se encontraron Diplomados</CenteredText>
    </div>
      )}

      </StyledTable>
    </Menus>
  );
}

export default DiplomadoTable;
