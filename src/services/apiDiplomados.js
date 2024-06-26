import supabase from "./supabase";

async function insertUserName() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.user_metadata.fullName;
}

async function insertUserId() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.id;
}

export async function createEditDiplomados(newDiplomado, id ) {

  const userName = await insertUserName();
  const userId = await insertUserId();

  newDiplomado.id_user = userId;
  newDiplomado.nombre_modifico = userName;

  let query = supabase.from("diplomados");
  // A) CREAR
  if (!id) query = query.insert([{ ...newDiplomado }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newDiplomado }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("diplomados no pudo ser modificado");
  }

  return data;
}

export async function getDiplomados() {
  const { data, error } = await supabase.from("diplomados").select("*");

  if (error) {
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
    throw new Error("diplomados no pudo ser borrado");
  }

  return data;
}