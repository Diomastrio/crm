
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
    nombre,
    email, 
    ocupacion, telefono,diplomado,diplomado2
  } = prospecto;

  return (
          <StyledTableBody >
                <StyledTableRow>
                  <StyledTableCell>{nombre}</StyledTableCell>
                  <StyledTableCell>{email}</StyledTableCell>
                  <StyledTableCell>{telefono}</StyledTableCell>
                  <StyledTableCell>{ocupacion}</StyledTableCell>
                  <StyledTableCell>{diplomado}</StyledTableCell>
                  <StyledTableCell>{diplomado2}</StyledTableCell>
      <StyledTableCell>
        <Modal>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
                
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Eliminar</Menus.Button>
              </Modal.Open>

            <Modal.Window name="edit">
              <ModificarProspectoForm clienteToEdit={prospecto} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete resourceName="cliente" disabled={isDeleting} onConfirm={() => deleteProspecto(prospectoId)}/>
            </Modal.Window>
        </Modal>
      </StyledTableCell>
    </StyledTableRow>
  </StyledTableBody>
  );
}

export default ProductoRow;
