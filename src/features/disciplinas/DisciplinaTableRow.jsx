import ModificarDiplomadoForm from "./ModificarDiplomadoForm";
import { useDeleteDisciplinna } from "./useDeleteDisciplina";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";

import {
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
} from "../../ui/ClientTableUi";

function DiplomadoRow({ diplomados }) {
  const { isDeleting, deleteDisciplina } = useDeleteDisciplinna();

  const {
    id: clienteId,
    Nombre
  } = diplomados;

  return (
    <StyledTableBody>
      <StyledTableRow>
        <StyledTableCell>{Nombre}</StyledTableCell> 
        <StyledTableCell>
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Eliminar</Menus.Button>
            </Modal.Open>

            <Modal.Window name="edit">
              <ModificarDiplomadoForm diplomadoToEdit={diplomados} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="disciplina"
                disabled={isDeleting}
                onConfirm={() => deleteDisciplina(clienteId)}
              />
            </Modal.Window>
          </Modal>
        </StyledTableCell>
      </StyledTableRow>
    </StyledTableBody>
  );
}

export default DiplomadoRow;
