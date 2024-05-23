import { useCliente } from "./useSelectCliente";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from 'react-icons/fa';
import ClienteRow from "./ClienteTableRow";

import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import supabase from "../../services/supabase";

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

function ArticuloTable() {
  const { isLoading, cliente } = useCliente();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); 
  const [searchResults2, setSearchResults2] = useState(1); 

  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  // 1) FILTER
  const filterValue = searchParams.get("precio") || "all";
  
  let filteredProductos;
  if (filterValue === "all") {
    filteredProductos = cliente;
  } else if (filterValue.startsWith("letter-")) {
    const letter = filterValue.split("-")[1].toUpperCase();
    filteredProductos = cliente.filter((cliente) => cliente.nombre.charAt(0).toUpperCase() === letter);
  }
  else if (filterValue === "activos") {
    filteredProductos = cliente.filter((cliente) => cliente.cursa_actualmente === true);
  }
  else if (filterValue === "inactivos") {
    filteredProductos = cliente.filter((cliente) => cliente.cursa_actualmente === false);
  }

// 2) BUSQUEDA
const handleSearch = async (event) => {
  setSearchTerm(event.target.value);
  if (event.target.value === ' ') {
    filteredProductos = cliente;
  } else if (event.target.value.length === 0 && event.target.value.match(/[a-zA-Z]/)) {
    const letter = event.target.value.toUpperCase();
    filteredProductos = cliente.filter((cliente) => cliente.nombre.charAt(0).toUpperCase() === letter);
  } else {
    const { data, error } = await supabase.from('cliente').select('*').ilike('nombre', `%${event.target.value}%`);
    if (error) {
      console.log(error);
    } else {
      if (data.length) {
        setSearchResults(data);
        setSearchResults2(data.length);
      }
      if (!data.length) {
        setSearchResults2(0);
      }
    }
  }
}

  if (searchResults.length > 0) { filteredProductos = searchResults; }

  // 3) ORDENAR
  const sortBy = searchParams.get("sortBy") || "nombre-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  if (field === "nombre") {
    // eslint-disable-next-line no-unused-vars
    const sortedProductos = filteredProductos.sort((a, b) => {
      const nameA = a[field].toUpperCase(); // convert to uppercase to compare
      const nameB = b[field].toUpperCase(); // convert to uppercase to compare
      if (nameA < nameB) {
        return -1 * modifier; // if A comes before B return -1 for desc order, 1 for asc order
      }
      if (nameA > nameB) {
        return 1 * modifier; // if A comes after B return 1 for desc order, -1 for asc order
      }
      return 0; // if A and B are the same return 0
    });
  }

  
  const sortedProductos = filteredProductos.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <StyledTable >
        <StyledTableHeader> 
      <StyledTableHeaderCell>Busqueda</StyledTableHeaderCell>
      <StyledTableHeaderCell><Input type="text" value={searchTerm} onChange={ handleSearch } id="telefono"/></StyledTableHeaderCell>
        <StyledTableHeaderCell><FaSearch style={{ margin: '0 10px 0 10px',  fontSize: '26px' }} /></StyledTableHeaderCell>
        </StyledTableHeader> 

            <StyledTableHead>
              <StyledTableRow>
                <StyledTableHeadCell>Cliente</StyledTableHeadCell>
                <StyledTableHeadCell>Email</StyledTableHeadCell>
                <StyledTableHeadCell>telefono</StyledTableHeadCell>
                <StyledTableHeadCell>No. Diplomados</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomados Terminados</StyledTableHeadCell>
                <StyledTableHeadCell>Cursando Actualmente</StyledTableHeadCell>
                <StyledTableHeadCell>CURP</StyledTableHeadCell>
                <StyledTableHeadCell>Ocupacion</StyledTableHeadCell>
                <StyledTableHeadCell>RFC</StyledTableHeadCell>
                <StyledTableHeadCell>Fecha Inicio</StyledTableHeadCell>
                <StyledTableHeadCell>Fecha Fin</StyledTableHeadCell>
                <StyledTableHeadCell>Fecha Limite</StyledTableHeadCell>
                <StyledTableHeadCell>Edad</StyledTableHeadCell>
                <StyledTableHeadCell>Lugar Residencia</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomados Escritos</StyledTableHeadCell>
                <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>

      {searchResults2 > 0 ? (
          sortedProductos.map((clientes, index) => (
            <ClienteRow cliente={clientes} key={clientes.id} />
      ))
      ) : (
        <div style={{padding: '4rem'}}>
      <CenteredText>No se encontraron clientes</CenteredText>
    </div>
      )}

      </StyledTable>
    </Menus>
  );
}

export default ArticuloTable;
