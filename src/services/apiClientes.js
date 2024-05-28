import supabase from "./supabase";

export async function createEditCliente(newCliente, id) {
  
  let query = supabase.from("cliente");
  // A) CREAR
  if (!id) query = query.insert([{ ...newCliente }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newCliente }).eq("id", id);

  const { data, error } = await query.select().single();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Cliente no pudo ser modificado");
  }

  return data;
}

export async function getClientes() {
  const { data, error } = await supabase.from("cliente").select("*");

  if (error) {
    console.error(error);
    throw new Error("Clientes no pudieron ser cargados");
  }

  return data;
}

export async function deleteCliente(id) {
  const { data, error } = await supabase
    .from("cliente")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Clientes no pudo ser borrado");
  }

  return data;
}