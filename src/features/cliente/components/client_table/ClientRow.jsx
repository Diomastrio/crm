// "use client";

// import React from "react";
// import { Table } from "flowbite-react";
// export default function ClientTable({ clientes, index }) {
//   const {
//     nombre,
//     email,
//     curp,
//     numero_diplomados,
//     diplomados_terminados,
//     cursa_actualmente,
//   } = clientes;

//   const cursaStatus = cursa_actualmente ? "SI cursa" : "NO";

//   return (
//     <Table>
//       <thead>
//         <tr>
//           <th scope="col">Cliente</th>
//           <th scope="col">Email</th>
//           <th scope="col">No. Diplomados</th>
//           <th scope="col">Diplomados Terminados</th>
//           <th scope="col">Cursando Actualmente</th>
//           <th scope="col">CURP</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>{nombre}</td>
//           <td>{email}</td>
//           <td>{numero_diplomados}</td>
//           <td>{diplomados_terminados}</td>
//           <td>{cursaStatus}</td>
//           <td>{curp}</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }
