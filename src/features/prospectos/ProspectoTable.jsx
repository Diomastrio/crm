import { useProspecto  } from "./useSelectProspecto";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from 'react-icons/fa';
import ProspectoRow from "./ProspectoTableRow";

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

function ProspectoTable() {
  const { isLoading, prospecto } = useProspecto();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); 
  const [searchResults2, setSearchResults2] = useState(1); 

  if (isLoading) return <Spinner />;
  if (!prospecto.length) return <Empty resourceName="prospecto" />;

  // 1) FILTER
  const filterValue = searchParams.get("precio") || "all";
  
  let filteredProductos;
  if (filterValue === "all") {
    filteredProductos = prospecto;
  } else if (filterValue.startsWith("letter-")) {
    const letter = filterValue.split("-")[1].toUpperCase();
    filteredProductos = prospecto.filter((prospecto) => prospecto.nombre.charAt(0).toUpperCase() === letter);
  }
  else if (filterValue === "activos") {
    filteredProductos = prospecto.filter((prospecto) => prospecto.cursa_actualmente === true);
  }
  else if (filterValue === "inactivos") {
    filteredProductos = prospecto.filter((prospecto) => prospecto.cursa_actualmente === false);
  }

// 2) BUSQUEDA
const handleSearch = async (event) => {
  setSearchTerm(event.target.value);
  if (event.target.value === ' ') {
    filteredProductos = prospecto;
  } else if (event.target.value.length === 0 && event.target.value.match(/[a-zA-Z]/)) {
    const letter = event.target.value.toUpperCase();
    filteredProductos = prospecto.filter((prospecto) => prospecto.nombre.charAt(0).toUpperCase() === letter);
  } else {
    const { data, error } = await supabase.from('prospecto').select('*').ilike('nombre', `%${event.target.value}%`);
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
                <StyledTableHeadCell>Prospecto</StyledTableHeadCell>
                <StyledTableHeadCell>Email</StyledTableHeadCell>
                <StyledTableHeadCell>telefono</StyledTableHeadCell>
          
                <StyledTableHeadCell>Ocupacion</StyledTableHeadCell>
             
                <StyledTableHeadCell>Diplomados Escritos</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomado Segundo</StyledTableHeadCell>
                <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>

      {searchResults2 > 0 ? (
          sortedProductos.map((prospecto, index) => (
            <ProspectoRow prospecto={prospecto} key={prospecto.id} />
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
