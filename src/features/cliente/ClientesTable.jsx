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
  const [searchTermDiplomado, setSearchTermDiplomado] = useState("");

  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  // 1) FILTER

  const handleFilter = (clientes) => {
    let filteredProductos = clientes;

    //BUSQUEDA
    if (searchTerm.length > 0) {
      filteredProductos = filteredProductos.filter((cliente) =>
        cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (searchTermDiplomado.length > 0) {
      filteredProductos = filteredProductos.filter((cliente) =>
      cliente.numero_diplomados.toString().charAt(0).includes(searchTermDiplomado) 
      );
    }

    //FILTRO CLIENTES
      const filterValue = searchParams.get("nombre") || "all";

      if (filterValue === "activos") {
        filteredProductos = filteredProductos.filter(
          (cliente) => cliente.cursa_actualmente === true
        );
      } else if (filterValue === "inactivos") {
        filteredProductos = filteredProductos.filter(
          (cliente) => cliente.cursa_actualmente === false
        );
      }
      else if (filterValue === "frecuentes") {
          filteredProductos = filteredProductos.filter(
            (cliente) => cliente.numero_diplomados >3
          );
        }
      else if (filterValue === "vence") {
        const oneWeekAgo = new Date(Date.now() + 7 );
  
        filteredProductos = filteredProductos.filter((cliente) =>
          new Date(cliente.fecha_limite) < oneWeekAgo,
        )
      }

    //otros diplomados
    if (filterValue === "Desarrollo Humano" || filterValue === "Descuentos"
   || filterValue === "Educación" || filterValue === "Ingeniería"
   || filterValue === "Negocios" || filterValue === "OnLive"
   || filterValue === "Psicología" || filterValue === "Salud"
  ) {
    filteredProductos = filteredProductos.filter((cliente) => 
      cliente.disciplina === filterValue || cliente.disciplina2 === filterValue);
  }
   
  // ORDENAR
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
  const filteredClientes = handleFilter(cliente);

  return (
    <Menus>
      <StyledTable>
        <StyledTableHeader>
          <tr>
            <StyledTableHeaderCell>Busqueda Nombre</StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <Input type="text" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} id="telefono"
              />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <FaSearch style={{ margin: "0 10px 0 10px", fontSize: "26px" }} />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell/>
            <StyledTableHeaderCell>Busqueda N. Diplomas</StyledTableHeaderCell>
            <StyledTableHeaderCell>
             <Input type="number" value={searchTermDiplomado}
                onChange={(e) => setSearchTermDiplomado(e.target.value)} id="te"
              />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <FaSearch style={{ margin: "0 10px 0 10px", fontSize: "26px" }} />
            </StyledTableHeaderCell>
            <StyledTableHeaderCell/>
            <StyledTableHeaderCell/>
            <StyledTableHeaderCell><StyledInput /></StyledTableHeaderCell>
            <StyledTableHeaderCell><StyledInput/></StyledTableHeaderCell>
            <StyledTableHeaderCell><StyledInput /></StyledTableHeaderCell>
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
            <StyledTableHeadCell>Disciplina</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomado </StyledTableHeadCell>
            <StyledTableHeadCell>Disciplina Segunda</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomado Segundo</StyledTableHeadCell>
            <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
          </StyledTableRow>
        </StyledTableHead>

        {filteredClientes.length ?  (
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
