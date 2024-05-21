/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import supabase from "../../../../services/supabase";
import { Link } from "react-router-dom";
import { useUser } from "../../../authentication/useUser";
import {
  Container,
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledModal,
  StyledModalButton,
  StyledParagraph,
  ButtonContainer,
} from "../../../../ui/ClientTableUi";
import { useDeleteClient } from "../../useDeleteClient";
import { HiPencil, HiTrash } from "react-icons/hi";
import CreateClientForm from "../../CreateClientForm";

export default function ClientTable() {
  const { isDeleting, deleteClient } = useDeleteClient();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [clients, setClients] = useState([""]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [clientIdToDelete, setClientIdToDelete] = useState("");
  const [editingClient, setEditingClient] = useState(null);

  const { user } = useUser();

  const fetchClients = async () => {
    try {
      const pageSize = 10;
      const { count } = await supabase
        .from("cliente")
        .select("*", { count: "exact" });
      const { data, error } = await supabase
        .from("cliente")
        .select("*")
        .range(page * pageSize, page + 1 * pageSize - 1);

      if (error) {
        throw new Error(error.message);
      }
      // setClients((prevClients) => [...prevClients, ...data]);
      setClients((prevClients) => {
        const newClients = data.filter(
          (d) => !prevClients.some((p) => p.id === d.id)
        );
        return [...prevClients, ...newClients];
      });
      setTotalPages(Math.ceil(count / pageSize));
    } catch (error) {
      console.error("Error getting clients:", error);
      throw error;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (page < totalPages) {
          setPage(page + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, totalPages]);

  useEffect(() => {
    fetchClients();
  }, [user.isAuthenticated, page]);

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Error: Client ID is undefined");
      return;
    }

    try {
      const { data } = await supabase.from("cliente").delete().eq("id", id);

      if (data) {
        console.log("Client deleted:", data);
      }
      setClients(clients.filter((client) => client.id !== id)); // changed from clientIdToDelete to id
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  return (
    <Container>
      {clients.length > 0 ? (
        <>
          <StyledTable>
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableHeadCell>Cliente</StyledTableHeadCell>
                <StyledTableHeadCell>Email</StyledTableHeadCell>
                <StyledTableHeadCell>telefono</StyledTableHeadCell>
                <StyledTableHeadCell>No. Diplomados</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomados Terminados</StyledTableHeadCell>
                <StyledTableHeadCell>Cursando Actualmente</StyledTableHeadCell>
                <StyledTableHeadCell>CURP</StyledTableHeadCell>
                <StyledTableHeadCell>Ocupacion</StyledTableHeadCell>
                <StyledTableHeadCell>rfc</StyledTableHeadCell>
                <StyledTableHeadCell>fecha_inicio</StyledTableHeadCell>
                <StyledTableHeadCell>fecha_fin</StyledTableHeadCell>
                <StyledTableHeadCell>fecha_limite</StyledTableHeadCell>
                <StyledTableHeadCell>edad</StyledTableHeadCell>
                <StyledTableHeadCell>lugar_residencia</StyledTableHeadCell>
                <StyledTableHeadCell>
                  <span>Editar/Eliminar</span>
                </StyledTableHeadCell>
              </StyledTableRow>
            </StyledTableHead>
            {clients.map((client, index) => (
              <StyledTableBody key={index}>
                <StyledTableRow>
                  <StyledTableCell>{client.nombre}</StyledTableCell>
                  <StyledTableCell>{client.email}</StyledTableCell>
                  <StyledTableCell>{client.telefono}</StyledTableCell>
                  <StyledTableCell>{client.numero_diplomados}</StyledTableCell>
                  <StyledTableCell>
                    {client.diplomados_terminados}
                  </StyledTableCell>
                  <StyledTableCell>
                    {client.cursa_actualmente ? "SI" : "NO"}
                  </StyledTableCell>
                  <StyledTableCell>{client.curp}</StyledTableCell>
                  <StyledTableCell>{client.ocupacion}</StyledTableCell>
                  <StyledTableCell>{client.rfc}</StyledTableCell>
                  <StyledTableCell>{client.fecha_inicio}</StyledTableCell>
                  <StyledTableCell>{client.fecha_fin}</StyledTableCell>
                  <StyledTableCell>{client.fecha_limite}</StyledTableCell>
                  <StyledTableCell>{client.edad}</StyledTableCell>
                  <StyledTableCell>{client.lugar_residencia}</StyledTableCell>
                  <StyledTableCell>
                    <span
                      onClick={() => {
                        setShowDeleteModal(true);
                        setClientIdToDelete(client.id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Eliminar{" "}
                    </span>
                    <span
                      onClick={() => {
                        setShowEditModal(true);
                        setEditingClient(client);
                      }}
                    >
                      / Editar
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              </StyledTableBody>
            ))}
          </StyledTable>
        </>
      ) : (
        <p>No se encontraron clientes</p>
      )}
      {showDeleteModal && (
        <StyledModal>
          <StyledParagraph>
            Esta seguro de eliminar este cliente?
          </StyledParagraph>
          <ButtonContainer>
            <StyledModalButton onClick={() => handleDelete(clientIdToDelete)}>
              Eliminar
            </StyledModalButton>
            <StyledModalButton onClick={() => setShowDeleteModal(false)}>
              Cerrar
            </StyledModalButton>
          </ButtonContainer>
        </StyledModal>
      )}

      {showEditModal && (
        <StyledModal>
          <div className="modal-content">
            <CreateClientForm clienteToEdit={editingClient} />
            <button onClick={() => setShowEditModal(false)}>Cerrar</button>
          </div>
        </StyledModal>
      )}
    </Container>
  );
}
// eslint-disable-next-line no-lone-blocks
{
  /* <StyledTableCell>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={client.id} />

            <Menus.List id={client.id}>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Editar</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Eliminar</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateClientForm clienteToEdit={client} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="clientes"
                disabled={isDeleting}
                onConfirm={() => handleDelete(clientIdToDelete)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </StyledTableCell> */
}
