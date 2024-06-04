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
    DesarrolloHumano,
    Descuentos,
    Ingeniería,
    Negocios,
    OnLive,
    Psicología,
    Salud,
  } = diplomados;

  return (
    <StyledTableBody>
      <StyledTableRow>
        <StyledTableCell>{DesarrolloHumano}</StyledTableCell> 
        <StyledTableCell>{Descuentos}</StyledTableCell> 
        <StyledTableCell>{Ingeniería}</StyledTableCell> 
        <StyledTableCell>{Negocios}</StyledTableCell> 
        <StyledTableCell>{OnLive}</StyledTableCell> 
        <StyledTableCell>{Psicología}</StyledTableCell> 
        <StyledTableCell>{Salud}</StyledTableCell> 
        <StyledTableCell>
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Eliminar</Menus.Button>
            </Modal.Open>

            <Modal.Window name="edit">
              <ModificarDiplomadoForm clienteToEdit={diplomados} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cliente"
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
