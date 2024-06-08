import supabase from "../../services/supabase.js";

const generatePDF = () => {
  // Set isFetching to true before initiating the data retrieval
  const isFetching = true;

  // Notify the application that data retrieval has started
  console.log('Fetching data...');

  return new Promise(async (resolve, reject) => {
    try {
      setTimeout(async () => {
        const { data, error } = await supabase.from("cliente").select("*");

        // Set isFetching to false once data retrieval is complete
        const isFetching = false;

        if (error) {
          // Set isError to true if an error occurs
          const isError = true;
          reject('Error al obtener los datos de clientes');
          return;
        }

        // Set isSuccess to true upon successful data retrieval
        const isSuccess = true;

        const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        const oneWeekThen = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
        let filteredClientes = data.filter(      
          (cliente) => (new Date(cliente.fecha_limite) < oneWeekFromNow ) && (new Date(cliente.fecha_limite) > oneWeekThen)
        );    

        // Check if isLoading is true
        if (isFetching) {
          console.log('Loading...');
          return;
        }

        // Check if the cliente array is empty
        if (!filteredClientes.length) {
          console.log('No clients found');
          return;
        }

        resolve(filteredClientes);
      }, 1000);
    } catch (error) {
      // Set isError to true if an error occurs
      const isError = true;
      reject('Error al generar el PDF');
    }
  });
};

generatePDF()
  .then((filteredClientes) => {
    console.log('Clientes filtrados:', filteredClientes);
    // Rest of the code to generate the PDF with the filtered clients
  })
  .catch((error) => {
    console.error(error);
  });
