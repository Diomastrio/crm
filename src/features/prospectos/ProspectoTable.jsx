import { useProspecto  } from "./useSelectProspecto";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from 'react-icons/fa';
import ProspectoRow from "./ProspectoTableRow";

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
  StyledTableWrapper,
} from "../../ui/ClientTableUi";

import styled from 'styled-components';

const CenteredText = styled.p`
  text-align: center;
  color:#F8A964;
`;

function ProspectoTable() {
  const { isLoading, prospecto } = useProspecto();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <Spinner />;
  if (!prospecto.length) return <Empty resourceName="prospecto" />;

 //FILTER
 const handleFilter = (clientes) => {
  let filteredProductos = clientes;

  //1)BUSQUEDA
  if (searchTerm.length > 0) {
    filteredProductos = filteredProductos.filter((cliente) =>
      cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ||
    cliente.apellido.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  //2)FILTRO PROSPECTO
  const filterValue = searchParams.get("nombre") || "all";
 if (filterValue==='all'){
  filteredProductos = filteredProductos.filter((cliente) => 
    cliente.disciplina || cliente.disciplina2);
 }
 else if (filterValue) {
    filteredProductos = filteredProductos.filter((cliente) => 
      cliente.disciplina === filterValue || cliente.disciplina2 === filterValue);
  }

//3)ORDENAR
  const sortBy = searchParams.get("sortBy") || "nombre-asc";
  const [field, direction] = sortBy.split("-");
  
  if (field === "nombre") {
    filteredProductos.sort((a, b) => {
      const nameA = a[field].toUpperCase();
      const nameB = b[field].toUpperCase();
      if (nameA < nameB) {
        return direction === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  } else if (field === "diplomados_terminados") {
    filteredProductos.sort((a, b) => (a[field] - b[field]) * (direction === "asc" ? 1 : -1));
  }
  
return filteredProductos;
};
const filteredProspectos = handleFilter(prospecto);

  return (
    <Menus> <StyledTableWrapper>
      <StyledTable >     

        <StyledTableHeader> 
      <StyledTableHeaderCell>Busqueda Nombre/Apellido</StyledTableHeaderCell>
      <StyledTableHeaderCell><Input type="text" value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value) } id="telefono"/></StyledTableHeaderCell>
        <StyledTableHeaderCell><FaSearch style={{ margin: '0 10px 0 10px',  fontSize: '26px' }} /></StyledTableHeaderCell>
        </StyledTableHeader> 

            <StyledTableHead>
              
              <StyledTableRow>
                <StyledTableHeadCell>Nombre</StyledTableHeadCell>
                <StyledTableHeadCell>Apellido</StyledTableHeadCell>
                <StyledTableHeadCell>Email</StyledTableHeadCell>
                <StyledTableHeadCell>Telefono</StyledTableHeadCell>
                <StyledTableHeadCell>Ocupacion</StyledTableHeadCell>
                <StyledTableHeadCell>Disciplina</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomado </StyledTableHeadCell>
                <StyledTableHeadCell>Abrev </StyledTableHeadCell>
                <StyledTableHeadCell>Disciplina Segunda</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomado Segundo</StyledTableHeadCell>
                <StyledTableHeadCell>Abrev </StyledTableHeadCell>
                <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>

      {filteredProspectos.length ? (
          filteredProspectos.map((prospecto, index) => (
            <ProspectoRow prospecto={prospecto} key={prospecto.id} />
      ))
      ) : (
        <div style={{padding: '4rem'}}>
      <CenteredText>No se encontraron prospectos</CenteredText>
    </div>
      )} </StyledTable>
      </StyledTableWrapper>

     
    </Menus>
  );
}

export default ProspectoTable;
