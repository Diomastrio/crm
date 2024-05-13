import supabase from "./supabase";

export async function createEditCliente(newClient, id) {
  try {
    const { data, error } = await supabase
      .from("cliente")
      .insert([
        {
          nombre: newClient.nombre,
          email: newClient.email,
          curp: newClient.curp,
          numero_diplomados: newClient.numero_diplomados,
          diplomados_terminados: newClient.diplomados_terminados,
          cursa_actualmente: newClient.cursa_actualmente,
        },
      ])
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error creating client:", error);
    throw error;
  }
}

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
