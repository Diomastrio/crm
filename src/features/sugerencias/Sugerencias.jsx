import { useSugerencias } from "./useSugerencias";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Row from "../../ui/Row";
import styled from "styled-components";

const StyledTable = styled.div`
border: 1px solid var(--color-grey-200);
font-size: 1.4rem;
background-color: var(--color-grey-0);
border-radius: 7px;
overflow: hidden;
  display: table;
  width: 100%;
`;

const StyledTableRow = styled.div`
  display: table-row;
`;

const StyledTableHeader = styled.div`
padding: 1.6rem 2rem;
background-color: var(--color-grey-50);
border-bottom: 1px solid var(--color-grey-100);
text-transform: uppercase;
letter-spacing: 0.4px;
font-weight: 600;
color: var(--color-grey-600);
  display: table-header-group;
`;

const StyledTableBody = styled.div`
  display: table-row-group;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledTableCell = styled.div`
  display: table-cell;
  padding: 10px;
  text-align: center;
  font-weight: ${(props) => (props.header ? "bold" : "normal")};
  & {
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

function Sugerencias() {
  const { isLoading, error, sugerencias } = useSugerencias();
  if (isLoading) return <Spinner />;
  if (!sugerencias.length) return <Empty resourceName="sugerencias" />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Sugerencias</Heading>
      </Row>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableRow>
            <StyledTableCell header>Nombre</StyledTableCell>
            <StyledTableCell header>Correo</StyledTableCell>
            <StyledTableCell header>Mensaje</StyledTableCell>
          </StyledTableRow>
        </StyledTableHeader>
        <StyledTableBody>
          {sugerencias.map((sugerencia) => (
            <StyledTableRow key={sugerencia.id}>
              <StyledTableCell>{sugerencia.nombre}</StyledTableCell>
              <StyledTableCell>{sugerencia.correo}</StyledTableCell>
              <StyledTableCell>{sugerencia.mensaje}</StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </>
  );
}

export default Sugerencias;
