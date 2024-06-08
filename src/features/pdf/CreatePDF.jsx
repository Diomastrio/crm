import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useCliente } from "../cliente/useSelectCliente";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";
import emailjs from 'emailjs-com';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ReportButton = () => {
  const { isLoading, cliente } = useCliente();

  const generatePDF = () => {
    if (isLoading) return <Spinner />;
    if (!cliente.length) return <Empty resourceName="clientes" />;

    const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const oneWeekThen = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    let filteredClientes = cliente.filter(      
      (cliente) => (new Date(cliente.fecha_limite) < oneWeekFromNow )&& new Date(cliente.fecha_limite)> oneWeekThen
    );

    var docDefinition = {
      content: [
        { text: 'Clientes con pronto vencimiento', style: 'header' },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              [{ text: 'Email', style: 'tableHeader' }, { text: 'Nombre', style: 'tableHeader' }, 
              { text: 'Teléfono', style: 'tableHeader' }, { text: 'Diplomado', style: 'tableHeader' }],
              ...filteredClientes.map(cliente => [cliente.email, cliente.nombre, cliente.telefono, cliente.disciplina])
            ]
          }
        },
        { text: 'Correos:', style: 'subheader' },
        ...filteredClientes.map(cliente => {
          return { text: cliente.email, margin: [0, 5, 0, 0] };
        })
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true
        }
      }
    };

    var pdfDoc = pdfMake.createPdf(docDefinition);
    pdfDoc.download('Clientes con VENCIMIENTO.pdf');
    

      // Generate the PDF and send the email
      pdfDoc.getBase64(() => {
        emailjs.send('service_eucps2l', 'template_vq62ght', {
          to_name: 'CES Centro de Estudios Superiores en Negocios y Humanidades',
          from_name: 'Storm Chasers',
          to_email: 'loflions123@gmail.com',
          message: filteredClientes,
          email: filteredClientes.map(cliente => [cliente.email]),
        }, '2RViu0pWfHIP5eOxh')
        .then(function(response) {
          //console.log('Email sent:', response);
        }, function(error) {
          //console.log('Failed to send email:', error);
        });
      });
  };

  return (
    <Button  variation={"swapii"} onClick={generatePDF}>Generar Reporte PDF</Button>
  );
};

export default ReportButton;
