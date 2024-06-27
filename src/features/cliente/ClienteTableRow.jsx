import ModificarClientForm from "./ModificarClienteForm";
import { useDeleteCliente } from "./useDeleteCliente";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

import {
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "../../ui/ClientTableUi";

function ClienteRow({ cliente,numero }) {
  const { isDeleting, deleteCliente } = useDeleteCliente();
  const {
    id: clienteId,
    nombre,
    apellido,
    email,
    curp,
    numero_diplomados,
    diplomados_terminados,
    cursa_actualmente,
    rfc,
    fecha_inicio,
    fecha_fin,
    fecha_limite,
    edad,
    genero,
    lugar_residencia,
    ocupacion,
    telefono,
    disciplina ,
    disciplina2,
    diplomado,
    diplomado2,
    fecha_inicio2,
    fecha_fin2,
    fecha_limite2,
    status, status2,cursa_actualmente2,
    abrev,abrev2
  } = cliente;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const formatDate = (inputDate) => {
    if (!inputDate || inputDate === "0") {
      return "N/A";
    }

    const dateParts = inputDate?.split("-");
    const year = dateParts[0];
    const month = months[parseInt(dateParts[1]) - 1];
    const day = dateParts[2];
    return `${day} de ${month} de ${year}`;
  };

  
  const nuevoInicio = formatDate(fecha_inicio);
  const nuevoFin = formatDate(fecha_fin);
  const nuevoLimite = formatDate(fecha_limite);

  const nuevoInicio2 = formatDate(fecha_inicio2);
  const nuevoFin2 = formatDate(fecha_fin2);
  const nuevoLimite2 = formatDate(fecha_limite2);

  const formatGenero = (genero) => {
    if (!genero || genero === "0") {
      return "N/A";
    }

    if (genero==='H'){
      genero='Hombre'
    }
    if (genero==='M'){
      genero='Mujer'
    }
    if (genero==='X'){
      genero='Otro'
    }
    return genero;
  };
  const nuevoGenero = formatGenero(genero);

  return (
    <StyledTableBody>
      <StyledTableRow>
       <StyledTableCell>{numero}</StyledTableCell>
        <StyledTableCell>{nombre}</StyledTableCell>
        <StyledTableCell>{apellido}</StyledTableCell>
        <StyledTableCell>{email}</StyledTableCell>
        <StyledTableCell>{telefono}</StyledTableCell>
        <StyledTableCell>{nuevoGenero}</StyledTableCell>
        <StyledTableCell>{curp}</StyledTableCell>
        <StyledTableCell>{rfc}</StyledTableCell>
        <StyledTableCell>{edad}</StyledTableCell>
        <StyledTableCell>{ocupacion}</StyledTableCell>
        <StyledTableCell>{lugar_residencia}</StyledTableCell>
        <StyledTableCell>{numero_diplomados}</StyledTableCell>
        <StyledTableCell>{diplomados_terminados}</StyledTableCell>
        <StyledTableCell>{disciplina}</StyledTableCell>
        <StyledTableCell>{diplomado}</StyledTableCell>
        <StyledTableCell>{abrev}</StyledTableCell> 
        <StyledTableCell>{cursa_actualmente ? "SI" : "NO"}</StyledTableCell>
        <StyledTableCell>{nuevoInicio}</StyledTableCell>
        <StyledTableCell>{nuevoFin}</StyledTableCell>
        <StyledTableCell>{nuevoLimite}</StyledTableCell>
        <StyledTableCell>{status}</StyledTableCell>
        <StyledTableCell>{disciplina2}</StyledTableCell>
        <StyledTableCell>{diplomado2}</StyledTableCell>
         <StyledTableCell>{abrev2}</StyledTableCell> 
        <StyledTableCell>{cursa_actualmente2 ? "SI" : "NO"}</StyledTableCell>
        <StyledTableCell>{nuevoInicio2}</StyledTableCell>
        <StyledTableCell>{nuevoFin2}</StyledTableCell>
        <StyledTableCell>{nuevoLimite2}</StyledTableCell>
        <StyledTableCell>{status2}</StyledTableCell>
        <StyledTableCell>
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Eliminar</Menus.Button>
            </Modal.Open>

            <Modal.Window name="edit">
              <ModificarClientForm clienteToEdit={cliente} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cliente"
                disabled={isDeleting}
                onConfirm={() => deleteCliente(clienteId)}
              />
            </Modal.Window>
          </Modal>
        </StyledTableCell>
      </StyledTableRow>
    </StyledTableBody>
  );
}

export default ClienteRow;
