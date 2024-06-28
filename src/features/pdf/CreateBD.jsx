import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import { useCliente } from "../cliente/useSelectCliente";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";
import emailjs from 'emailjs-com';

pdfMake.fonts = {
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};
const ReportButton = () => {
  const { isLoading, cliente } = useCliente();

  

  const generatePDF = () => {
    if (isLoading) return <Spinner />;
    if (!cliente.length) return <Empty resourceName="clientes" />;

    const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const oneWeekThen = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    let filteredClientes = cliente.filter(      
      (cliente) => 
        (((new Date(cliente.fecha_limite) < oneWeekFromNow )&& (new Date(cliente.fecha_limite)> oneWeekThen))
      || ((new Date(cliente.fecha_limite2) < oneWeekFromNow )&& (new Date(cliente.fecha_limite2)> oneWeekThen)))
      && (cliente.status1 !== 'Enviado' && cliente.status2 !== 'Enviado')
    );


    let smth = (new Date(cliente.birthday))
    let cliente_mes = smth.getUTCMonth()

    let mes 
       mes = new Date()
       mes = mes.getUTCMonth();  
       console.log(mes); 

      let passesForthFilterValue = (mes===cliente_mes);            
















    var docDefinition = {
      content: [
        { text:  `Clientes con  cumpleanios mes de ${mes}`, style: 'header' },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [ 
              [{ text: 'Email', style: 'tableHeader' }, { text: 'Nombre', style: 'tableHeader' }, 
              { text: 'Teléfono', style: 'tableHeader' }],
              ...filteredClientes.map(cliente => [cliente.email, cliente.nombre, cliente.telefono]),
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
    pdfDoc.download('Clientes Birthday.pdf');
    

      // Generate the PDF and send the email
      pdfDoc.getBase64(() => {
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
          to_name: 'CES Centro de Estudios Superiores en Negocios y Humanidades',
          from_name: 'Storm Chasers',
          to_email: import.meta.env.VITE_EMAILJS_TO,
          message: filteredClientes,
          email: filteredClientes.map(cliente => [cliente.email]),
        }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then(function(response) {
          //console.log('Email sent:', response);
        }, function(error) {
          //console.log('Failed to send email:', error);
        });
      });
  };

  return (
    <div>
 <Button  variation={"midiplomado"} onClick={generatePDF}>Generar Cumpleaños Reporte</Button>
     </div>
  );
};

export default ReportButton;