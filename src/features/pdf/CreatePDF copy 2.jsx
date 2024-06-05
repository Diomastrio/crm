import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useCliente } from "../cliente/useSelectCliente";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ReportButton = () => {
  const { isLoading, cliente } = useCliente();

  const generatePDF = () => {
    if (isLoading) return <Spinner />;
    if (!cliente.length) return <Empty resourceName="clientes" />;

    let filteredClientes = cliente.filter(
      (cliente) => cliente.cursa_actualmente === true
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
    
    const Email = {
      send: function (a) {
        return new Promise(function (resolve, reject) {
          a.nocache = Math.floor(1e6 * Math.random() + 1);
          a.Action = "Send";
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (response) {
            resolve(response);
          });
        });
      },
      ajaxPost: function (url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
          var response = xhr.responseText;
          if (callback) callback(response);
        };
        xhr.send(data);
      }
    };

    pdfDoc.getBase64((pdfDoc) => {
      // Send email using SMTPJS
      Email.send({
        SecureToken : "868f21e7-b70b-43f3-8f9f-c1ea493b529f",
        To: 'kacraxazeuvu-5931@yopmail.com',
        From: "utd0197@gmail.com",
        Subject: "Subject of the Email",
        Body: "Please find the attached PDF report",
        Attachments: [
          {
            name: "report.pdf",
            data: pdfDoc
          }
        ]
      }).then(
        message => alert(message)
      );
    });
  };

  return (
    <Button  variation={"swapii"} onClick={generatePDF}>Generar Reporte PDF</Button>
  );
};

export default ReportButton;
