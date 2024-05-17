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
} from "../../../../ui/ClientTableUi";

export default function ClientTable() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [clients, setClients] = useState([""]);
  const [showModal, setShowModal] = useState(false);
  const [clientIdToDelete, setClientIdToDelete] = useState("");
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
                        setShowModal(true);
                        setClientIdToDelete(client._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      CRUD
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
