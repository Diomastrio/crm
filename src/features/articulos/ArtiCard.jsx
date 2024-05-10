import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiHeart } from "react-icons/hi2";
import { useCreateMarcador } from "../cabins/useCreateMarcador";

import { useState } from "react";
import Mensa from "../../mensajes/Mensa";
import Button from "../../ui/Button";

const Card = styled.div`
  width: 270px;
  height: 100%;
  border: 0px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
  overflow: hidden;
  margin-left: 35px;
  margin-top: 30px;
  background: rgba(127, 127, 127, 0.1);
`;

// Define a styled component for the image
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  transition: scale 400ms;
  &:hover {
    scale: 140%;
  }
`;

// Define a styled component for the card content
const Content = styled.div`
  padding: 15px;
`;

// Define a styled component for the card title
const Title = styled.h3`
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
const Descripcion = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Precio = styled.div`
  font-family: "Sono";
  font-weight: 800;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  margin-left: -1px;
  padding: 8px;
  display: inline-block;
  border-radius: 10px;
  background-color: #14dbc1;
`;

function ArtiCard({ producto }) {
  const { createMarcador } = useCreateMarcador();

  const {
    id: productoId,
    name,
    precio,
    cantidad,
    descripcion,
    image,
    nombre,
  } = producto;

  // const handleClick = (id) => {
  //   console.log(id);
  //   // console.log(name);
  //   // console.log(precio);
  //   // console.log(cantidad);
  //   // console.log(email);
  //   // console.log(descripcion);
  // };

  const handleMarcador = (id) => {
    createMarcador({
      id_productos: id,
    });
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Card>
      <Content>
        <div style={{ overflow: "hidden" }}>
          <Image src={image} />
        </div>
        <Title>{name}</Title>
        <div>
          Vendedor:{" "}
          <span style={{ color: "#008080", textTransform: "uppercase" }}>
            {nombre}{" "}
          </span>
        </div>
        <Descripcion>{descripcion}</Descripcion>
        <Precio>{formatCurrency(precio)}</Precio>
        <div style={{ color: "#77C66E" }}>Numero de artículos: {cantidad} </div>

        {/* los tres puntitos=modal */}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productoId} />

            <Menus.List id={productoId}>
              {/* <Menus.Button onClick={() => handleClick(productoId)}> Mensaje </Menus.Button> */}

              {/* Mensaje */}
              <Button
                onClick={handleOpenModal}
                style={{ width: "100%", backgroundColor: "#000" }}
              >
                Mensajes
              </Button>
              {showModal && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 999,
                  }}
                  onClick={handleCloseModal}
                >
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "var(--color-grey-100)",
                      padding: "20px",
                      borderRadius: "5px",
                      width: "90%",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mensa />
                  </div>
                </div>
              )}
              {/*Mensaje */}
              <Menus.Button
                icon={
                  <HiHeart
                    style={{ width: "30px", height: "30px", color: "#cc0c39" }}
                  />
                }
                onClick={() => handleMarcador(productoId)}
              >
                Guardar
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Modal>
      </Content>
    </Card>
  );
}

export default ArtiCard;
