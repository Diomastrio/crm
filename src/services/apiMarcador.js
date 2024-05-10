import supabase from "./supabase";


async function insertUserId() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user.id;
}

export async function getMarcadorTable() {
    const userId = await insertUserId();
  const { data, error } = await supabase.from("marcadores_vista").select("*").eq('marcador_id_usuario',userId)
  if (error) {
    console.error(error);

    throw new Error("Productos no pudieron ser cargados");
  }
  return data;
}

export async function deleteProducto(id) { 
  const { data, error } = await supabase
    .from("marcadores")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Producto could not be deleted");
  }

  return data;
}