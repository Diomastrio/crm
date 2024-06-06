import ModificarDiplomadoForm from "./ModificarDiplomadoForm";
import { useDeleteDiplomado } from "./useDeleteDiplomado";
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
  const { isDeleting, deleteDiplomado } = useDeleteDiplomado();

  const {
    id: clienteId,
    nombre,disciplina
  } = diplomados;

  return (
    <StyledTableBody>
      <StyledTableRow>
        <StyledTableCell>{nombre}</StyledTableCell> 
        <StyledTableCell>{disciplina}</StyledTableCell> 
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
                resourceName="diplomado"
                disabled={isDeleting}
                onConfirm={() => deleteDiplomado(clienteId)}
              />
            </Modal.Window>
          </Modal>
        </StyledTableCell>
      </StyledTableRow>
    </StyledTableBody>
  );
}

export default DiplomadoRow;
