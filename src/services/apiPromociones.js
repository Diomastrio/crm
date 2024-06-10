import supabase from "./supabase";

export async function createEditPromocion(newPromocionBatch) {

  let query = supabase.from("promociones");
  query = query.insert([{ ...newPromocionBatch }]);
  const { data } = await query.select().single();

  return data;
}
