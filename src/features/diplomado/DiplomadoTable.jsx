import { useDiplomado  } from "./useSelectDiplomado";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from 'react-icons/fa';
import DiplomadoTableRow from "./DiplomadoTableRow";

import { useSearchParams } from "react-router-dom";
import { useState } from 'react';

import {
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
  Input,
  StyledTableHeader,
  StyledTableHeaderCell,
} from "../../ui/ClientTableUi";

import styled from 'styled-components';

const CenteredText = styled.p`
  text-align: center;
  color:#F8A964;
`;

function ProspectoTable() {
  const { isLoading, diplomado } = useDiplomado();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <Spinner />;
  if (!diplomado.length) return <Empty resourceName="diplomado" />;

 // 1) FILTER

 const handleFilter = (diplomado) => {
  let filteredProductos = diplomado;

  //BUSQUEDA
  if (searchTerm.length > 0) {
    filteredProductos = filteredProductos.filter((diplomado) =>
      diplomado.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  //FILTRO PROSPECTO
  const filterValue = searchParams.get("nombre") || "all";

  if (filterValue === "Todos") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado);
  }
  else if (filterValue === "Desarrollo Humano") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Desarrollo Humano');
  }
  else if (filterValue === "Descuentos") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Descuentos');
  }
  else if (filterValue === "Educación") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Educación');
  }
  else if (filterValue === "Ingeniería") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Ingeniería');
  }
  else if (filterValue === "Negocios") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Negocios');
  }
  else if (filterValue === "OnLive") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'OnLive');
  }
  else if (filterValue === "Psicología") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Psicología');
  }
  else if (filterValue === "Salud") {
    filteredProductos = filteredProductos.filter((diplomado) => diplomado.disciplina === 'Salud');
  }

return filteredProductos;
};
const filteredProspectos = handleFilter(diplomado);

  return (
    <Menus>
      <StyledTable >
        <StyledTableHeader> 
      <StyledTableHeaderCell>Busqueda</StyledTableHeaderCell>
      <StyledTableHeaderCell><Input type="text" value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value) } id="telefono"/></StyledTableHeaderCell>
        <StyledTableHeaderCell><FaSearch style={{ margin: '0 10px 0 10px',  fontSize: '26px' }} /></StyledTableHeaderCell>
        </StyledTableHeader> 

            <StyledTableHead>
       
              <StyledTableRow>
                <StyledTableHeadCell>Diplomado</StyledTableHeadCell>
                <StyledTableHeadCell>Disciplina</StyledTableHeadCell>
                <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>

      {filteredProspectos.length ? (
          filteredProspectos.map((diplomado) => (
            <DiplomadoTableRow diplomados={diplomado} key={diplomado.id} />
      ))
      ) : (
        <div style={{padding: '4rem'}}>
      <CenteredText>No se encontraron prospectos</CenteredText>
    </div>
      )}

      </StyledTable>
    </Menus>
  );
}

export default ProspectoTable;
