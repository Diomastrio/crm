import supabase from "./supabase";

async function insertUserName() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.user_metadata.fullName;
}

async function insertUserId() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.id;
}

export async function createEditProspecto(newProspecto, id) {
  
  newProspecto.id_diplomado = newProspecto.diplomado;
  newProspecto.id_diplomado2 = newProspecto.diplomado2;

  let diplomadonombre2
  const { data: diplomado } = await supabase.from("diplomados").select("nombre").eq('id',newProspecto.diplomado)
  const { data: diplomado2 } = await supabase.from("diplomados").select("nombre").eq('id',newProspecto.diplomado2)
  let diplomadonombre =diplomado[0].nombre
  if (diplomado2){ diplomadonombre2 =diplomado2[0].nombre;}

  newProspecto.diplomado = diplomadonombre
  newProspecto.diplomado2 = diplomadonombre2;

  const userName = await insertUserName();
  const userId = await insertUserId();
  newProspecto.id_user = userId;  
  newProspecto.nombre_modifico = userName;


  let query = supabase.from("prospecto");
  // A) CREAR
  if (!id) query = query.insert([{ ...newProspecto }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newProspecto }).eq("id", id);

  const { data, error } = await query.select().single();

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