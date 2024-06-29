import { useCliente } from "./useSelectCliente";

import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import ClienteRow from "./ClienteTableRow";
import DinamicGraphs from "../graficas/DinamicGraphs";

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
  StyledTableWrapper
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
  const [searchTermResidencia, setSearchTermResidencia] = useState("");

  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  // 1) FILTER
  const handleFilter = (clientes) => {
    return clientes.filter((cliente) => {
      //BUSQUEDA
      let passesSearchTerm = searchTerm.length === 0 ||
        cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cliente.apellido.toLowerCase().includes(searchTerm.toLowerCase());

      let passesSearchTermDiplomado = searchTermDiplomado.length === 0 ||
        (cliente.numero_diplomados && cliente.numero_diplomados
            .toString().includes(searchTermDiplomado.toString()));

      let passesSearchTermLugar = searchTermResidencia.length === 0 ||
        cliente.lugar_residencia.toLowerCase().includes(searchTermResidencia.toLowerCase());
      //FILTROS
      let filterValue = searchParams.get("nombre") || "all";
      let passesFilterValue;
      switch (filterValue) {
        case "activos":
          passesFilterValue = cliente.cursa_actualmente && cliente.cursa_actualmente === true;
          break;
        case "inactivos":
          passesFilterValue = cliente.cursa_actualmente && cliente.cursa_actualmente === false;
          break;
        case "frecuentes":
          passesFilterValue = cliente.numero_diplomados > 3;
          break;
        case "vence":
          const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
          const oneWeekThen = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
          passesFilterValue = 
          ((new Date(cliente.fecha_limite) < oneWeekFromNow ) && (new Date(cliente.fecha_limite)> oneWeekThen))
          || ((new Date(cliente.fecha_limite2) < oneWeekFromNow )&& (new Date(cliente.fecha_limite2)> oneWeekThen))
          break;
        case "Hombres":
          passesFilterValue = cliente.genero === 'H';
          break;  
        case "Mujeres":
          passesFilterValue = cliente.genero === 'M';
          break;  
        default:
          passesFilterValue = true;
      }

      //diplomados
      let secondFilterValue = searchParams.get("disciplina") || "all";
      let passesSecondFilterValue;
      switch (secondFilterValue) {
        case 'all':
          passesSecondFilterValue = cliente.disciplina || cliente.disciplina2;
          break;
        case secondFilterValue:
          passesSecondFilterValue = cliente.disciplina === secondFilterValue || cliente.disciplina2 === secondFilterValue;
          break;
        default:
          passesSecondFilterValue = true;
      }

    //anios 
      let thirdFilterValue = searchParams.get("anio") || "all";
      let passesThirdFilterValue;
      let algo = (new Date(cliente.fecha_inicio))
      let algo2 = (new Date(cliente.fecha_inicio2))
      let cliente_inicio = algo.getFullYear()
      let cliente_inicio2 = algo2.getFullYear()
      let anio 
      switch (thirdFilterValue) {
        case 'all': 
         passesThirdFilterValue = (cliente);            
         break;
        case 'nuevos': 
        passesThirdFilterValue = (!cliente.fecha_inicio);            
        break;
        case thirdFilterValue:
         anio = ( new Date(`Mon Jan 01 ${thirdFilterValue}`))
         anio = anio.getFullYear();  
         passesThirdFilterValue = (anio===cliente_inicio || anio===cliente_inicio2);            
         break;
        default:
          passesThirdFilterValue = true;
      }

      //meses
      let forthFilterValue = searchParams.get("mes") || "all";
      let passesForthFilterValue;
      let smth, cliente_mes,smth2, cliente_mes2

      if(cliente.fecha_inicio)
        {smth = (new Date(cliente.fecha_inicio2))
      cliente_mes = smth.getUTCMonth()
        }

      if(cliente.fecha_inicio2)
        {smth2 = (new Date(cliente.fecha_inicio2))
      cliente_mes2 = smth2.getUTCMonth()
        }
      let mes 
      switch (forthFilterValue) {
        case 'all': 
        passesForthFilterValue = (cliente);            
         break;          
        case forthFilterValue:
         mes = ( new Date(`Mon ${forthFilterValue} 01 2000`))
         mes = mes.getUTCMonth();  
         passesForthFilterValue = (mes===cliente_mes || mes===cliente_mes2);            
         break;
        default:
          passesForthFilterValue = true;
      }

      return (
        passesSearchTerm && 
        passesSearchTermLugar &&
        passesSearchTermDiplomado &&
        passesFilterValue &&
        passesSecondFilterValue &&
        passesThirdFilterValue &&
        passesForthFilterValue 
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


  var primer = []
  for (var i = 0; i <= 9; i++) {
    primer.push('');    
  }

  var segundo = []
  for (var j = 0; j <= 4; j++) {
    segundo.push('');    
  }

  var tercer = []
  for (var k = 0; k <= 2; k++) {
    tercer.push('');    
  }

  return (
    <Menus> <StyledTableWrapper>
      <StyledTable>     

        <StyledTableHeader>
          <tr>
          <StyledTableHeaderCell/>
            <StyledTableHeaderCell>Busqueda Nombre/Apellido</StyledTableHeaderCell>
            <StyledTableHeaderCell>
              <Input type="text" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} id="t"/>
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>Busqueda Residencia</StyledTableHeaderCell>
            <StyledTableHeaderCell>
             <Input type="text" value={searchTermResidencia}
                onChange={(e) => setSearchTermResidencia(e.target.value)} id="te"/>
            </StyledTableHeaderCell>
            <StyledTableHeaderCell>Busqueda N. Diplomas</StyledTableHeaderCell>
            <StyledTableHeaderCell>
             <Input type="number" value={searchTermDiplomado}
                onChange={(e) => setSearchTermDiplomado(e.target.value)} id="tel"/>
            </StyledTableHeaderCell>
            {primer.map((index) => (<StyledTableHeaderCell key={`primer_${index}`} />))}
            {tercer.map((index) => ( <StyledTableHeaderCell key={`tercer_${index}`}> <StyledInput /> </StyledTableHeaderCell>))}
            {segundo.map((index) => (<StyledTableHeaderCell key={`segundo_${index}`} />))}
            {tercer.map((index) => ( <StyledTableHeaderCell key={`cuarto_${index}`}> <StyledInput /> </StyledTableHeaderCell>))}
          </tr>
        </StyledTableHeader>

        <StyledTableHead>
          <StyledTableRow>
            <StyledTableHeadCell>N.</StyledTableHeadCell>
            <StyledTableHeadCell>Nombre</StyledTableHeadCell>
            <StyledTableHeadCell>Apellido</StyledTableHeadCell>
            <StyledTableHeadCell>Email</StyledTableHeadCell>
            <StyledTableHeadCell>Telefono</StyledTableHeadCell>
            <StyledTableHeadCell>Genero</StyledTableHeadCell>
            <StyledTableHeadCell>CURP</StyledTableHeadCell>
            <StyledTableHeadCell>RFC</StyledTableHeadCell>
            <StyledTableHeadCell>Edad</StyledTableHeadCell>
            <StyledTableHeadCell>Ocupacion</StyledTableHeadCell>
            <StyledTableHeadCell>Lugar Residencia</StyledTableHeadCell>
            <StyledTableHeadCell>No. Diplomados</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomados Terminados</StyledTableHeadCell>
            <StyledTableHeadCell>Disciplina</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomado </StyledTableHeadCell>
            <StyledTableHeadCell>Abrev </StyledTableHeadCell>
            <StyledTableHeadCell>Cursando Actualmente</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Inicio</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Fin</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Limite</StyledTableHeadCell>
            <StyledTableHeadCell>Estatus</StyledTableHeadCell>
            <StyledTableHeadCell>Disciplina Segunda</StyledTableHeadCell>
            <StyledTableHeadCell>Diplomado Segundo</StyledTableHeadCell>
            <StyledTableHeadCell>Abrev </StyledTableHeadCell>
            <StyledTableHeadCell>Cursando Actualmente</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Inicio</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Fin</StyledTableHeadCell>
            <StyledTableHeadCell>Fecha de Limite</StyledTableHeadCell>
            <StyledTableHeadCell>Estatus</StyledTableHeadCell>
            <StyledTableHeadCell>Editar/Eliminar</StyledTableHeadCell>
          </StyledTableRow>
        </StyledTableHead>

        {filteredClientes.length ? (
           handleSort(filteredClientes).map((clientes,index) => (
            <ClienteRow cliente={clientes} numero={index} key={clientes.id} />
          ))         
        ) : (
          null
        )}
      </StyledTable>
      </StyledTableWrapper>
      {filteredClientes.length ? (
          null        
        ) : (
<div style={{ padding: "4rem" }}>
            <CenteredText>No se encontraron clientes</CenteredText>
          </div>        )}      

      {filteredClientes.length ? (
         <DinamicGraphs data={filteredClientes}/>
        ) : (
          null
        )}
    </Menus>
  );
}

export default ClienteTable;
