import supabase from "./supabase";

//create
export async function createEditProducto(newProducto, id) {
  
  // // 1. Crear/editar productos
  let query = supabase.from("cliente");
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

export async function getProductos() {
  const { data, error } = await supabase.from("cliente").select("*");

  if (error) {
    console.error(error);
    throw new Error("Productos no pudieron ser cargados");
  }

  return data;
}

//mostrar solo a 
export async function getProductosTable() {
    // Get the user rol just admin
   const { data, error } = await supabase.from("cliente").select("*");
  if (error) {
    console.error(error);
    throw new Error("Productos no pudieron ser cargados");
  }return data;
}

export async function deleteProducto(id) {
  const { data, error } = await supabase
    .from("cliente")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Producto could not be deleted");
  }

  return data;
}