
import CreateProductoForm from "./ModificarClienteForm";
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

function ProductoRow({ cliente }) {
  const { isDeleting, deleteProducto } = useDeleteCliente();

  const {
    id: productoId,
    nombre,
    email, 
    curp, 
    numero_diplomados,
    diplomados_terminados,
    cursa_actualmente,
    rfc, fecha_inicio, fecha_fin, fecha_limite, edad,lugar_residencia, ocupacion, telefono,nombre_diplomado
  } = cliente;

  return (
          <StyledTableBody >
                <StyledTableRow>
                  <StyledTableCell>{nombre}</StyledTableCell>
                  <StyledTableCell>{email}</StyledTableCell>
                  <StyledTableCell>{telefono}</StyledTableCell>
                  <StyledTableCell>{numero_diplomados}</StyledTableCell>
                  <StyledTableCell>
                    {diplomados_terminados}
                  </StyledTableCell>
                  <StyledTableCell>
                    {cursa_actualmente ? "SI" : "NO"}
                  </StyledTableCell>
                  <StyledTableCell>{curp}</StyledTableCell>
                  <StyledTableCell>{ocupacion}</StyledTableCell>
                  <StyledTableCell>{rfc}</StyledTableCell>
                  <StyledTableCell>{fecha_inicio}</StyledTableCell>
                  <StyledTableCell>{fecha_fin}</StyledTableCell>
                  <StyledTableCell>{fecha_limite}</StyledTableCell>
                  <StyledTableCell>{edad}</StyledTableCell>
                  <StyledTableCell>{lugar_residencia}</StyledTableCell>
                  <StyledTableCell>{nombre_diplomado}</StyledTableCell>


        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productoId} />

            <Menus.List id={productoId}>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Eliminar</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateProductoForm clienteToEdit={cliente} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cliente"
                disabled={isDeleting}
                onConfirm={() => deleteProducto(productoId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
        </StyledTableRow>

      </StyledTableBody>
  );
}

export default ProductoRow;
