/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table } from "flowbite-react";

function ArtiCard({ clientes, index }) {
  const {
    nombre,
    email,
    curp,
    numero_diplomados,
    diplomados_terminados,
    cursa_actualmente,
  } = clientes;

  const cursaStatus = cursa_actualmente ? "SI cursa" : "NO";
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Cliente</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>No. Diplomados</Table.HeadCell>
          <Table.HeadCell>Diplomados Terminados</Table.HeadCell>
          <Table.HeadCell>Cursando Actualmente</Table.HeadCell>
          <Table.HeadCell>CURP</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{index}</Table.Cell>

            <div>
              <Table.Cell>{nombre}</Table.Cell>
            </div>

            <div>
              <Table.Cell>{email}</Table.Cell>
            </div>

            <div>
              <Table.Cell>{numero_diplomados}</Table.Cell>
            </div>

            <div>
              {" "}
              <Table.Cell>{diplomados_terminados}</Table.Cell>
            </div>

            <div>
              <Table.Cell>{cursaStatus}</Table.Cell>
            </div>

            <div>
              <Table.Cell>{curp}</Table.Cell>
            </div>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default ArtiCard;
