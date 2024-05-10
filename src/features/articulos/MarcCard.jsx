import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { useDeleteProducto } from "../cabins/useDeleteMarcador";
import { HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Card = styled.div `
  width: 270px;
  height: 100%;
  border: 0px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
  overflow: hidden;
  margin-left:35px;
  margin-top:30px;
  Background: rgba(127, 0, 0, 0.5);
`;

// Define a styled component for the image
const Image = styled.img `
  width: 300px;
  height:  300px;
  object-fit: cover;
  overflow: hidden;
  transition:scale 400ms;
  &:hover {
     scale:140%;
  }
`;

// Define a styled component for the card content
const Content = styled.div `
  padding: 15px;
`;

// Define a styled component for the card title
const Title = styled.h3 `
  margin: 0;
  margin-bottom: 5px;

  font-size: 21px;
  color: var(--color-grey-600);
  font-family: "Sono";
  text-align: center;
  border-bottom: 1px solid rgba(192, 192, 192, 0.5);
  text-transform: uppercase;
`;

// Define a styled component for the card description
const Descripcion = styled.p `
  margin: 10px 0;
  font-size: 18px;
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Precio = styled.div `
  font-family: "Sono";
  font-weight: 800;
  font-size: 20px;
  color:white;
  margin-bottom:10px;
  margin-left:-1px;
  padding:8px;
  display: inline-block;
  border-radius: 10px;
  background-color: #cc0c39;
`;

function MarcCard({ producto }) {
    const { isDeleting, deleteProducto } = useDeleteProducto();

  const {
    id: productoId,
    name,
    precio,
    cantidad, 
    descripcion,
    image,
    nombre,
    marcador_id : marcadorId
  } = producto;

  const handleClick = (id) => {
    console.log(producto);
  };

  return (
    <Card>
      <Content>
      <div  style={{overflow: 'hidden' }}>
        <Image src={image} /></div>
        <Title>{name}</Title>
        <div >Vendedor: <span style={{color: '#36454F', textTransform: 'uppercase', fontSize: '18px' }}>{nombre} </span></div>
        <Descripcion>{descripcion}</Descripcion>
        <Precio>{formatCurrency(precio)}</Precio>
        <div style={{color: '#FFD700 ', fontSize: '17px' }}>Numero de artículos: {cantidad} </div>
  
        {/* los tres puntitos=modal */}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productoId} />

            <Menus.List id={productoId}>
              <Menus.Button onClick={() => handleClick(productoId)}>Mensaje{" "} </Menus.Button>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />} opens="delete">Eliminar</Menus.Button>
              </Modal.Open>
              </Menus.List>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="marcador"
                disabled={isDeleting}
                onConfirm={() => deleteProducto(marcadorId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </Content>
    </Card>
  );
}

export default MarcCard;
