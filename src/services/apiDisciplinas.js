import supabase from "./supabase";

export async function createEditDisciplinas(newDisciplinas, id ) {

  let query = supabase.from("disciplinas");
  // A) CREAR
  if (!id) query = query.insert([{ ...newDisciplinas }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newDisciplinas }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error)
  if (error.message === "duplicate key value violates unique constraint \"disciplinas_Nombre_key\"") {
    console.error(error);
    throw new Error("¡Solo una disciplina con ese nombre es posible!");
  }
  
  if (error) {
    console.error(error);
    throw new Error("Disciplina no pudo ser modificada");
  }

  return data;
}

export async function getDisciplinas() {
  const { data, error } = await supabase.from("disciplinas").select("*");

  if (error) {
    console.error(error);
    throw new Error("disciplinas no pudieron ser cargadas");
  }

  return data;
}

export async function deleteDisciplinas(id) {
  const { data, error } = await supabase
    .from("disciplinas")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("disciplina no pudo ser borrada");
  }

  return data;
}