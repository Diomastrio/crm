import supabase from "./supabase";

export async function createEditClient(newClient, id) {
  try {
    const { data, error } = await supabase
      .from("cliente")
      .insert([
        {
          nombre: newClient.nombre,
          email: newClient.email,
          curp: newClient.curp,
          num_diplomados: newClient.num_diplomados,
          diplomados_ter: newClient.diplomados_ter,
          status: newClient.status,
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

export async function getClients() {
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

export async function deleteClient(id) {
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
