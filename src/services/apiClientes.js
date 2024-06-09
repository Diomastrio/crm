import supabase from "./supabase.js";

async function insertUserName() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.user_metadata.fullName;
}

async function insertUserId() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.id;
}

export async function createEditCliente(newCliente, id) {
  
  const userName = await insertUserName();
  const userId = await insertUserId();

  newCliente.id_user = userId;
  newCliente.nombre_modifico = userName;

  let curpInput = newCliente.curp

   const getCurp = (curpInput) => {  
    const genderRegex = /[HM]/;
    const genderMatch = curpInput.match(genderRegex);
    const gender = genderMatch ? genderMatch[0] : "Gender not found";

    return gender;
  };
      let nuevoGenero = getCurp(curpInput);

  let query = supabase.from("cliente");
  // A) CREAR
  if (!id) query = query.insert([{ genero: nuevoGenero, ...newCliente }]);
  // B) EDITAR
  if (id) query = query.update({  ...newCliente }).eq("id", id);


  const { data, error } = await query.select().single();

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