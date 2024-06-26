import supabase from "./supabase";

export async function createEditDisciplinas(newDisciplinas, id ) {

  let query = supabase.from("cuenta");
  // A) CREAR
  if (!id) query = query.insert([{ ...newDisciplinas }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newDisciplinas }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("cuenta no pudo ser modificada");
  }

  return data;
}

export async function getDisciplinas() {
  const { data, error } = await supabase.from("cuenta").select("*");

  if (error) {
    throw new Error("cuenta no pudieron ser cargadas");
  }

  return data;
}

export async function deleteDisciplinas(id) {
  const { data, error } = await supabase
    .from("cuenta")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("cuenta no pudo ser borrada");
  }

  return data;
}