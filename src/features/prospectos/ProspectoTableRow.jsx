
import ModificarProspectoForm from "./ModificarProspectoForm";
import { useDeleteProspecto } from "./useDeleteProspecto";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

import {
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "../../ui/ClientTableUi";

function ProductoRow({ prospecto }) {
  const { isDeleting, deleteProspecto } = useDeleteProspecto();

  const {
    id: prospectoId,
    nombre,apellido,
    email, 
    ocupacion, telefono,disciplina,disciplina2,diplomado,diplomado2
  } = prospecto;

  return (
          <StyledTableBody >
                <StyledTableRow>
                  <StyledTableCell>{nombre}</StyledTableCell>
                  <StyledTableCell>{apellido}</StyledTableCell>
                  <StyledTableCell>{email}</StyledTableCell>
                  <StyledTableCell>{telefono}</StyledTableCell>
                  <StyledTableCell>{ocupacion}</StyledTableCell>
                  <StyledTableCell>{disciplina}</StyledTableCell>
                  <StyledTableCell>{diplomado}</StyledTableCell>
                  <StyledTableCell>{disciplina2}</StyledTableCell>
                  <StyledTableCell>{diplomado2}</StyledTableCell>
      <StyledTableCell>
        <Modal>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
                
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash/>} color={"trash"}>Eliminar</Menus.Button>
              </Modal.Open>

            <Modal.Window name="edit">
              <ModificarProspectoForm prospectoToEdit={prospecto} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete resourceName="prospecto" disabled={isDeleting} onConfirm={() => deleteProspecto(prospectoId)}/>
            </Modal.Window>
        </Modal>
      </StyledTableCell>
    </StyledTableRow>
  </StyledTableBody>
  );
}

export default ProductoRow;
