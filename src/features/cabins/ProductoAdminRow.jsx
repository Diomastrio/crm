import styled from "styled-components";

import CreateProductoForm from "./CreateProductoForm";
import { useDeleteProducto } from "./useDeleteProducto";
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  margin-left:10px;
  margin-top:5px;
  margin-bottom:5px;
`;

const Producto = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Precio = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Descripcion = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
const Nombre = styled.div`
  font-family: "Sono";  
  font-weight: 500; 
  color: var(--color-green-700);
`;

function ProductoAdminRow({ producto }) {
  const { isDeleting, deleteProducto } = useDeleteProducto();

  const {
    id: productoId,
    name,
    precio, //name
    cantidad, // maxCapacity
    descripcion, //regularPrice
    // discount,
    image,
    // description,
  } = producto;


  return (
    <Table.Row>
      <Img src={image} />
      <Nombre>{name}</Nombre>
      <Producto>{}</Producto>
      <div>Numero de artículos: {cantidad} </div>
      <Precio>{formatCurrency(precio)}</Precio>

      <Descripcion>{descripcion}</Descripcion>

      <div>
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
              <CreateProductoForm productoToEdit={producto} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="productos"
                disabled={isDeleting}
                onConfirm={() => deleteProducto(productoId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ProductoAdminRow;
