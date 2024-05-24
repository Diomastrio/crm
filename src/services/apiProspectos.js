import supabase from "./supabase";

export async function createEditProspecto(newProspecto, id) {
  
  let query = supabase.from("prospecto");
  // A) CREAR
  if (!id) query = query.insert([{ ...newProspecto }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newProspecto }).eq("id", id);

  const { data, error } = await query.select().single();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Prospecto no pudo ser modificado");
  }

  return data;
}

export async function getProspectos() {
  const { data, error } = await supabase.from("prospecto").select("*");

  if (error) {
    console.error(error);
    throw new Error("Prospectos no pudieron ser cargados");
  }

  return data;
}

export async function deleteProspecto(id) {
  const { data, error } = await supabase
    .from("prospecto")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Prospecto no pudo ser borrado");
  }

  return data;
}