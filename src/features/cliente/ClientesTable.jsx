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
    return clientes.filter((cliente) => {
      //BUSQUEDA
      let passesSearchTerm =
        searchTerm.length === 0 ||
        cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase());
      let passesSearchTermDiplomado =
        searchTermDiplomado.length === 0 ||
        (cliente.numero_diplomados &&
          cliente.numero_diplomados
            .toString()
            .includes(searchTermDiplomado.toString()));

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
          passesFilterValue = new Date(cliente.fecha_limite) < oneWeekFromNow;
          break;
        default:
          passesFilterValue = true;
      }

      //diplomados
      let secondFilterValue = searchParams.get("disciplina") || "all";
      let passesSecondFilterValue;
      switch (secondFilterValue) {
        case "desarrollo":
          passesSecondFilterValue = cliente.disciplina === "Desarrollo Humano";
          break;
        case "descuentos":
          passesSecondFilterValue = cliente.disciplina === "Descuentos";
          break;
        case "educacion":
          passesSecondFilterValue = cliente.disciplina === "Educación";
          break;
        case "ingenieria":
          passesSecondFilterValue = cliente.disciplina === "Ingeniería";
          break;
        case "negocios":
          passesSecondFilterValue = cliente.disciplina === "Negocios";
          break;
        case "onLive":
          passesSecondFilterValue = cliente.disciplina === "OnLive";
          break;
        case "psicologia":
          passesSecondFilterValue = cliente.disciplina === "Psicología";
          break;
        case "salud":
          passesSecondFilterValue = cliente.disciplina === "Salud";
          break;
        default:
          passesSecondFilterValue = true;
      }

      return (
        passesSearchTerm &&
        passesSearchTermDiplomado &&
        passesFilterValue &&
        passesSecondFilterValue &&
        passesSecondFilterValue
      );
    });
  };

  const filteredClientes = handleFilter(cliente);
  let sortBy = searchParams.get("sortBy") || "";
  const handleSort = (clientes) => {
    switch (sortBy) {
      case "nombre-asc":
        return [...clientes].sort((a, b) => a.nombre.localeCompare(b.nombre));
      case "nombre-desc":
        return [...clientes].sort((a, b) => b.nombre.localeCompare(a.nombre));
      case "diplomados_terminados-asc":
        return [...clientes].sort(
          (a, b) => a.diplomados_terminados - b.diplomados_terminados
        );
      case "diplomados_terminados-desc":
        return [...clientes].sort(
          (a, b) => b.diplomados_terminados - a.diplomados_terminados
        );
      default:
        return clientes;
    }
  };

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
            <StyledTableHeadCell>Telefono</StyledTableHeadCell>
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

        {filteredClientes.length ? (
          handleSort(filteredClientes).map((clientes, index) => (
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
