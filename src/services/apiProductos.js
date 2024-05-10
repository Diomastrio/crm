import supabase, { supabaseUrl } from "./supabase";

async function insertUserId() {
  // Get the user id
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // Return the user id
  return user.id;
}
async function insertUserPhone() {
  // Get the user phone
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // Return the user phone
  return user.user_metadata.phone;
}

async function insertUserName() {
  // Get the user name
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // Return the user name
  return user.user_metadata.fullName;
}

async function getUserRol() {
  // Get the user rol
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // Return the user rol
  return user.user_metadata.rol;
}

//create
export async function createEditProducto(newProducto, id) {
  const hasImagePath = newProducto.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newProducto.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newProducto.image
    : `${supabaseUrl}/storage/v1/object/public/articulos/${imageName}`;

  // Get the user email
  const userId = await insertUserId();
  // Get the user phone
  const userPhone = await insertUserPhone();
  // Get the user name
  const userName = await insertUserName();

  // Add the email,phone,name to the newProducto object
  newProducto.id_usuarios = userId;
  newProducto.phone = userPhone;
  newProducto.nombre = userName;

  // // 1. Crear/editar productos
  let query = supabase.from("productos");
  // A) CREAR
  if (!id) query = query.insert([{ ...newProducto, image: imagePath }]);
  // B) EDITAR
  if (id)
    query = query.update({ ...newProducto, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Producto no pudo ser creado");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("articulos")
    .upload(imageName, newProducto.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("productos").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "La imagen del articulo no se pudo cargar y el producto no se creó"
    );
  }

  return data;
}

export async function getProductos() {
  const { data, error } = await supabase.from("productos").select("*");

  if (error) {
    console.error(error);
    throw new Error("Productos no pudieron ser cargados");
  }

  return data;
}

//mostrar solo a 
export async function getProductosTable() {
    // Get the user rol just admin
    const userRol= await getUserRol(); 
  if(userRol==='admin'){ const { data, error } = await supabase.from("productos").select("*");
  if (error) {
    console.error(error);
    throw new Error("Productos no pudieron ser cargados");
  }return data;
   }else{//everyone else
    const userId = await insertUserId();
  const { data, error } = await supabase.from("productos").select("*").eq("id_usuarios", userId);
  if (error) {
    console.error(error);
    throw new Error("Productos no pudieron ser cargados");
  }
  return data;}
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