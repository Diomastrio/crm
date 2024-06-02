import Button from "../../ui/Button";
import jsPDF from "jspdf";
import { useCliente } from "../cliente/useSelectCliente";

import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function AddClient() {
  const { isLoading, cliente } = useCliente();

  if (isLoading) return <Spinner />;
  if (!cliente.length) return <Empty resourceName="clientes" />;

  let filteredClientes = [];

  filteredClientes = cliente.filter(
    (cliente) => cliente.cursa_actualmente === true
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(20, 20, 'Filtered Vence Productos');
    var yOffset = 30;
    filteredClientes.forEach((cliente) => {
      doc.text(20, yOffset, `Product Name: ${cliente.name}, Expiry Date: ${cliente.fecha_limite}`);
      yOffset += 10; // Adjust the vertical position for the next entry
    });

    doc.save("download.pdf");
  }


  return (
    <div>
          <Button onClick={generatePDF}> Generar Reporte PDF </Button>
    </div>
  );
}

export default AddClient;
