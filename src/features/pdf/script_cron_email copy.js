import emailjs from 'emailjs-com';
import supabase from "../../services/supabase.js";

const generatePDF = async () => {
   const { data } = await supabase.from("cliente").select("*");

    const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const oneWeekThen = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    let filteredClientes = data.filter(      
      (cliente) => (new Date(cliente.fecha_limite) < oneWeekFromNow )&& new Date(cliente.fecha_limite)> oneWeekThen
    );    
console.log(filteredClientes)
        /*emailjs.send('service_eucps2l', 'template_vq62ght', {
          to_name: 'CES Centro de Estudios Superiores en Negocios y Humanidades',
          from_name: 'Storm Chasers',
          to_email: 'loflions123@gmail.com',
          message: filteredClientes,
          email: filteredClientes.map(cliente => [cliente.email]),
        }, '2RViu0pWfHIP5eOxh')
        .then(function(response) {
          console.log('Email sent:', response);
        }, function(error) {
          console.log('Failed to send email:', error)
      });*/

  };

generatePDF()
