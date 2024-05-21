import supabase from "./supabase";

export async function createEditCliente(newClient, id) {
  // if (!newClient || !newClient.nombre) {
  //   throw new Error(
  //     'newClient is undefined or missing required property "nombre"'
  //   );
  // }

  try {
    // 1. Crear/editar clientes
    let query = supabase.from("cliente");
    // A) CREAR
    if (!id) query = query.insert([{ ...newClient }]);
    // B) EDITAR
    if (id) query = query.update({ ...newClient }).eq("id", id);

    const { data, error } = await query.select().single();

    if (error) {
      console.error(error);
      throw new Error("Cliente no pudo ser creado");
    }

    return data;
  } catch (error) {
    console.error("Error creating client:", error);
    throw error;
  }
}
// export async function createEditCliente(newClient, id) {
//   // if (!newClient || !newClient.nombre) {
//   //   throw new Error(
//   //     'newClient is undefined or missing required property "nombre"'
//   //   );
//   // }

//   try {
//     const { data, error } = await supabase
//       .from("cliente")
//       .insert([
//         {
//           nombre: newClient.nombre,
//           email: newClient.email,
//           curp: newClient.curp,
//           ocupacion: newClient.ocupacion,
//           numero_diplomados: newClient.numero_diplomados,
//           diplomados_terminados: newClient.diplomados_terminados,
//           cursa_actualmente: newClient.cursa_actualmente,
//           rfc: newClient.rfc,
//           fecha_inicio: newClient.fecha_inicio,
//           fecha_fin: newClient.fecha_fin,
//           fecha_limite: newClient.fecha_limite,
//           edad: newClient.edad,
//           lugar_residencia: newClient.lugar_residencia,
//           telefono: newClient.telefono,
//         },
//       ])
//       .eq("id", id);

//     if (error) {
//       throw new Error(error.message);
//     }

//     return data;
//   } catch (error) {
//     console.error("Error creating client:", error);
//     throw error;
//   }
// }

export async function getClientes() {
  try {
    const { data, error } = await supabase.from("cliente").select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error getting clients:", error);
    throw error;
  }
}

export async function deleteCliente(id) {
  try {
    const { data, error } = await supabase
      .from("cliente")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error deleting client:", error);
    throw error;
  }
}
