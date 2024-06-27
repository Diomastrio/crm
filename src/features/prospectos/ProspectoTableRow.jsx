
import ModificarProspectoForm from "./ModificarProspectoForm";
import { useDeleteProspecto } from "./useDeleteProspecto";
import { useAddProspecto } from "./useAddProspecto";

import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ConfirmAdd from "../../ui/ConfirmAdd";

import Menus from "../../ui/Menus";
import { MdAddReaction } from "react-icons/md";

import {
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "../../ui/ClientTableUi";

function ProductoRow({ prospecto }) {
  const { isDeleting, deleteProspecto } = useDeleteProspecto();
  const { isAdding, addProspecto } = useAddProspecto();

  const {
    id: prospectoId,
    nombre,apellido,
    email, 
    ocupacion, telefono,disciplina,disciplina2,diplomado,diplomado2,
    abrev,abrev2
  } = prospecto;

 let add=true;

  return (
          <StyledTableBody >
                <StyledTableRow>
                  <StyledTableCell>{nombre}</StyledTableCell>
                  <StyledTableCell>{apellido}</StyledTableCell>
                  <StyledTableCell>{email}</StyledTableCell>
                  <StyledTableCell>{telefono}</StyledTableCell>
                  <StyledTableCell>{ocupacion}</StyledTableCell>
                  <StyledTableCell>{disciplina}</StyledTableCell>
                  <StyledTableCell>{abrev}</StyledTableCell> 
                  <StyledTableCell>{diplomado}</StyledTableCell>
                  <StyledTableCell>{disciplina2}</StyledTableCell>
                  <StyledTableCell>{diplomado2}</StyledTableCell>
                  <StyledTableCell>{abrev2}</StyledTableCell> 
      <StyledTableCell>
        <Modal>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
                
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash/>} color={"trash"}>Eliminar</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="add">
              <Menus.Button icon={<MdAddReaction />}>Añadir</Menus.Button>
              </Modal.Open>

            <Modal.Window name="edit">
              <ModificarProspectoForm prospectoToEdit={prospecto} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete resourceName="prospecto" disabled={isDeleting} 
              onConfirm={() => deleteProspecto(prospectoId)}/>
            </Modal.Window>

            <Modal.Window name="add">
              <ConfirmAdd resourceName="cliente" disabled={isAdding}
                onConfirm={() => addProspecto({prospectoId, prospecto, add})}
              />
            </Modal.Window>

        </Modal>
      </StyledTableCell>
    </StyledTableRow>
  </StyledTableBody>
  );
}

export default ProductoRow;
