import supabase from "./supabase";

export async function getNumber(id) {
  let { data: productos, error } = await supabase
    .from("productos")
    .select("phone")
    .single()
    .eq("id", id);

  //   let query = supabase.from("productos");
  //   if (id) query = query.select.eq("id", id);
  //   const { data, error } = await query.select().single();
  //   console.log(data.phone);
  if (error) {
    console.error(error);
  }
  return productos;
}

// export async function whatsUrl() {
//   const productos = `https://wa.me/+52${productos.phone}`;
// }
