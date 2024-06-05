import supabase from "./supabase";

export async function createEditDiplomados(newDiplomado, id ) {

  let query = supabase.from("diplomados");
  // A) CREAR
  if (!id) query = query.insert([{ ...newDiplomado }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newDiplomado }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("diplomados no pudo ser modificado");
  }

  return data;
}

export async function getDiplomados() {
  const { data, error } = await supabase.from("diplomados").select("*");

  if (error) {
    console.error(error);
    throw new Error("diplomados no pudieron ser cargados");
  }

  return data;
}

export async function deleteDiplomados(id) {
  const { data, error } = await supabase
    .from("diplomados")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("diplomados no pudo ser borrado");
  }

  return data;
}