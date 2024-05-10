import supabase from "./supabase";

async function insertUserId() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user.id;
}

//create
export async function createEditProducto(newProducto, id) {
  const userid = await insertUserId();

  // Add the email,phone,name to the newProducto object
  newProducto.id_usuario = userid;
  
  // // 1. Crear/editar productos
  let query = supabase.from("marcadores");
  // A) CREAR
  if (!id) query = query.insert([{ ...newProducto }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newProducto }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Producto no pudo ser creado");
  }
  return data;
}

//mostrar solo a 
// export async function getArticulos() {
//     // Get the user rol just admin
//     const userRol= await getUserRol(); 
//   if(userRol==='admin'){ const { data, error } = await supabase.from("productos").select("*");
//   if (error) {
//     console.error(error);
//     throw new Error("Productos no pudieron ser cargados");
//   }return data;
//    }else{//everyone else
//     const userEmail = await insertUserEmail();
//   const { data, error } = await supabase.from("productos").select("*").eq("email", userEmail);
//   if (error) {
//     console.error(error);
//     throw new Error("Productos no pudieron ser cargados");
//   }
//   return data;}
// }

export async function getArticulos() {
  const { data, error } = await supabase.from("productos").select("*");

  if (error) {
    console.error(error);
    throw new Error("Productos no pudieron ser cargados");
  }

  return data;
}

export async function deleteProducto(id) {
  const { data, error } = await supabase
    .from("productos")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Producto could not be deleted");
  }

  return data;
}