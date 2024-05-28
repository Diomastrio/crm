import { useCliente } from "./useSelectCliente";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from "react-icons/fa";
import ClienteRow from "./ClienteTableRow";

import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import {
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableRow,
  Input,
  StyledInput,
  StyledTableHeader,
  StyledTableHeaderCell,
} from "../../ui/ClientTableUi";

import styled from "styled-components";

const CenteredText = styled.p`
  text-align: center;
  color: #f8a964;
`;

function ClienteTable() {
  const { isLoading, cliente } = useCliente();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults2, setSearchResults2] = useState(1);

  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  // 1) FILTER
  const filterValue = searchParams.get("nombre") || "all";

  const handleFilter = (clientes) => {
    let filteredProductos = clientes;

    // Apply search term filter (if any)
    if (searchTerm.length > 0) {
      filteredProductos = filteredProductos.filter((cliente) =>
        cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply cursa_actualmente filter (if selected)
    if (filterValue === "activos") {
      filteredProductos = filteredProductos.filter(
        (cliente) => cliente.cursa_actualmente === true
      );
    } else if (filterValue === "inactivos") {
      filteredProductos = filteredProductos.filter(
        (cliente) => cliente.cursa_actualmente === false
      );
    }

    return filteredProductos;
  };
  const filteredClientes = handleFilter(cliente);

  return (
    <Menus>
      <StyledTable>
        <StyledTableHeader>
          <tr>
            <StyledTableHeaderCell>Busqueda</StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
                id="telefono"
              />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <FaSearch style={{ margin: "0 10px 0 10px", fontSize: "26px" }} />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell></StyledTableHeaderCell>
            <StyledTableHeaderCell></StyledTableHeaderCell>
            <StyledTableHeaderCell></StyledTableHeaderCell>
            <StyledTableHeaderCell></StyledTableHeaderCell>
            <StyledTableHeaderCell></StyledTableHeaderCell>
            <StyledTableHeaderCell></StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <StyledInput />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <StyledInput />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <StyledInput />
            </StyledTableHeaderCell>
          </tr>
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
            <StyledTableHeadCell>Fecha de Inicio</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Fin</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Limite</StyledTableHeadCell>
            <StyledTableHeadCell>Edad</StyledTableHeadCell>
            <StyledTableHeadCell>Lugar Residencia</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomados Escritos</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomado Segundo</StyledTableHeadCell>
            <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
          </StyledTableRow>
        </StyledTableHead>

        {searchResults2 > 0 ? (
          filteredClientes.map((clientes, index) => (
            <ClienteRow cliente={clientes} key={clientes.id} />
          ))
        ) : (
          <div style={{ padding: "4rem" }}>
            <CenteredText>No se encontraron clientes</CenteredText>
          </div>
        )}
      </StyledTable>
    </Menus>
  );
}

export default ClienteTable;
