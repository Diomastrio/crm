import { useCuenta  } from "./useSelectCuenta";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import DiplomadoTableRow from "./CuentaTableRow";

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
  const { isLoading, cuenta } = useCuenta();

  if (isLoading) return <Spinner />;
  if (!cuenta.length) return <Empty resourceName="disciplina" />;
  
  return (
    <Menus>
      <StyledTable style={{border:'none',width: '90vh',}}>
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableHeadCell>Banco</StyledTableHeadCell>
                <StyledTableHeadCell>Cuenta Bancaria</StyledTableHeadCell>
                <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>

      {cuenta.length ? (
          cuenta.map((diplomado) => (
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
