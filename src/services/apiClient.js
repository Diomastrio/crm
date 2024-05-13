import supabse, { supabaseUrl } from "./supabase";

async function insertName() {
  const {
    data: { name },
  } = await supabse.auth.getUser();
  return name;
}
