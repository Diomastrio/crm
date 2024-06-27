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
  /*const { data: diplomado } = await supabase.from("diplomados").select("nombre").eq('id',newProspecto.diplomado)
  console.log(diplomado)

  const { data: diplomado2 } = await supabase.from("diplomados").select("nombre").eq('id',newProspecto.diplomado2)
console.log(diplomado2)

  let diplomadonombre = diplomado[0].nombre
  let diplomadonombre2
  if (diplomado2){ diplomadonombre2 = diplomado2[0].nombre;}


  newProspecto.diplomado = diplomadonombre
  newProspecto.diplomado2 = diplomadonombre2;
*/
  const userName = await insertUserName();
  const userId = await insertUserId();
  newProspecto.id_user = userId;  
  newProspecto.nombre_modifico = userName;


  let query = supabase.from("prospecto");
  // A) CREAR
  if (!id) query = query.insert([{ ...newProspecto }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newProspecto,terminosCondiciones:true }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Prospecto no pudo ser modificado");
  }

  return data;
}

export async function getProspectos() {
  const { data, error } = await supabase.from("prospecto").select("*");
  if (error) {
    throw new Error("Prospectos no pudieron ser cargados");
  }

  return data;
}

export async function deleteProspecto(prospecto) {

  let id
  (prospecto instanceof Object)?   id=prospecto.prospectoId :   id=prospecto

  let ADD=prospecto.add
  prospecto=prospecto.prospecto
  if(ADD){
    let newProspecto = {
      'nombre' : prospecto.nombre,
      'apellido' : prospecto.apellido,
      'email' : prospecto.email,
      'telefono' : prospecto.telefono,
      'ocupacion' : prospecto.ocupacion,
      'MasDe1Diploma' : prospecto.MasDe1Diploma,
      'disciplina' : prospecto.disciplina,
      'diplomado' : prospecto.diplomado,
      'disciplina2' : prospecto.disciplina2,
      'diplomado2' : prospecto.diplomado2,
     };  
     
    let query = supabase.from("cliente");
    // A) CREAR
    query = query.insert([{ ...newProspecto }]);
  
    const { error } = await query.select().single();
  
    if (error) {
      throw new Error("Prospecto no pudo ser añadido");
    }
  }



  const { data, error } = await supabase.from("prospecto").delete().eq("id", id);
  
  if (error) {
    throw new Error("Prospecto no pudo ser borrado");
  }

  return data;
}