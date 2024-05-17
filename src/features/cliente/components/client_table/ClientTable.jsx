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
  StyledButton,
  StyledModal,
} from "../../../../ui/ClientTable";

export default function ClientTable() {
  const [clients, setClients] = useState([""]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [clientIdToDelete, setClientIdToDelete] = useState("");
  const { user } = useUser();

  useEffect(() => {
    console.log("fecthClients is being called"); // Add this line
    const fetchClients = async () => {
      try {
        const { data, error } = await supabase.from("cliente").select();

        if (error) {
          throw new Error(error.message);
        }
        console.log("data", data); // Add this line
        setClients(data);
      } catch (error) {
        console.error("Error getting clients:", error);
        throw error;
      }
    };
    if (user.isAuthenticated) {
      fetchClients();
    }
  }, [user.isAuthenticated]);

  const handleShowMore = async () => {
    console.log("handleShowMore is being called"); // Add this line
    const startIndex = clients.length;
    try {
      const { data } = await supabase
        .from("cliente")
        .select("*")
        .range(startIndex, startIndex + 10);
      if (data) {
        setClients([...clients, ...data]);
        if (data.length > 10) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.error("Error getting more clients:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const { data } = await supabase.from("cliente").delete().eq("id", id);

  //     if (data) {
  //       console.log("Client deleted:", data);
  //     }
  //     setClients(clients.filter((client) => client.id !== clientIdToDelete));
  //   } catch (error) {
  //     console.error("Error deleting client:", error);
  //   }
  // };

  return (
    <Container>
      {clients.length > 0 ? (
        <>
          <StyledTable>
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableHeadCell>Cliente</StyledTableHeadCell>
                <StyledTableHeadCell>Email</StyledTableHeadCell>
                <StyledTableHeadCell>No. Diplomados</StyledTableHeadCell>
                <StyledTableHeadCell>Diplomados Terminados</StyledTableHeadCell>
                <StyledTableHeadCell>Cursando Actualmente</StyledTableHeadCell>
                <StyledTableHeadCell>CURP</StyledTableHeadCell>
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
                  <StyledTableCell>{client.numero_diplomados}</StyledTableCell>
                  <StyledTableCell>
                    {client.diplomados_terminados}
                  </StyledTableCell>
                  <StyledTableCell>
                    {client.cursa_actualmente ? "SI" : "NO"}
                  </StyledTableCell>
                  <StyledTableCell>{client.curp}</StyledTableCell>
                  <StyledTableCell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setClientIdToDelete(client._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Eliminar
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Link
                      to={`/cliente-update/${client.id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <span>Editar</span>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              </StyledTableBody>
            ))}
          </StyledTable>
          {showMore && (
            <StyledButton onClick={handleShowMore}>Mostrar Mas</StyledButton>
          )}
        </>
      ) : (
        <p>No se encontraron clientes</p>
      )}
      {showModal && (
        <StyledModal>
          <div className="modal-content">
            {/* Modal content */}
            <p>Are you sure you want to delete this client?</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </StyledModal>
      )}
    </Container>
  );
}
