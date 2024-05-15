import { useArticulos } from "../cliente/useArticulo";
import ArtiCard from "./ArtiCard";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from "react-icons/fa";

import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import supabase from "../../services/supabase";

import styled from "styled-components";

const CenteredText = styled.p`
  text-align: center;
  color: #f8a964;
`;

function ArticuloTable() {
  const { isLoading, cliente } = useArticulos();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResults2, setSearchResults2] = useState(1);

  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  // 1) FILTER
  const filterValue = searchParams.get("precio") || "all";

  let filteredProductos;
  if (filterValue === "all") {
    filteredProductos = cliente;
  } else if (filterValue.startsWith("letter-")) {
    const letter = filterValue.split("-")[1].toUpperCase();
    filteredProductos = cliente.filter(
      (cliente) => cliente.nombre.charAt(0).toUpperCase() === letter
    );
  }
  // 2) BUSQUEDA
  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === " ") {
      filteredProductos = cliente;
    } else if (
      event.target.value.length === 1 &&
      event.target.value.match(/[a-zA-Z]/)
    ) {
      const letter = event.target.value.toUpperCase();
      filteredProductos = cliente.filter(
        (cliente) => cliente.nombre.charAt(0).toUpperCase() === letter
      );
    } else {
      const { data, error } = await supabase
        .from("cliente")
        .select("*")
        .ilike("nombre", `%${event.target.value}%`);
      if (error) {
        console.log(error);
      } else {
        if (data.length) {
          setSearchResults(data);
          setSearchResults2(data.length);
        }
        if (!data.length) {
          setSearchResults2(0);
        }
      }
    }
  };

  if (searchResults.length > 0) {
    filteredProductos = searchResults;
  }

  // 3) ORDENAR
  const sortBy = searchParams.get("sortBy") || "nombre-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  if (field === "nombre") {
    // eslint-disable-next-line no-unused-vars
    const sortedProductos = filteredProductos.sort((a, b) => {
      const nameA = a[field].toUpperCase(); // convert to uppercase to compare
      const nameB = b[field].toUpperCase(); // convert to uppercase to compare
      if (nameA < nameB) {
        return -1 * modifier; // if A comes before B return -1 for desc order, 1 for asc order
      }
      if (nameA > nameB) {
        return 1 * modifier; // if A comes after B return 1 for desc order, -1 for asc order
      }
      return 0; // if A and B are the same return 0
    });
  }

  const sortedProductos = filteredProductos.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2fr 1fr 2fr 2fr">
        <Table.Header>
          <span style={{ margin: "0 10px 0 10px" }}>Busqueda</span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              border: "1px solid var(--color-grey-100)",
              backgroundColor: "var(--color-grey-0)",
              boxShadow: "var(--shadow-sm)",
              borderRadius: "var(--border-radius-sm)",
              padding: "0.4rem",
              display: "flex",
              gap: "0.4rem",
            }}
          />
          <span>
            <FaSearch style={{ margin: "2px 0 0 10px", fontSize: "20px" }} />
          </span>
        </Table.Header>

        {searchResults2 > 0 ? (
          <Table.Bodyi
            data={sortedProductos}
            render={(clientes, index) => (
              <ArtiCard clientes={clientes} index={index} key={clientes.id} />
            )}
          />
        ) : (
          <div style={{ padding: "4rem" }}>
            <CenteredText>No se encontraron clientes</CenteredText>
          </div>
        )}
      </Table>
    </Menus>
  );
}

export default ArticuloTable;
