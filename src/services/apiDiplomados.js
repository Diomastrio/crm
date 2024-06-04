import supabase from "./supabase";

export async function createEditDiplomados(newDiplomado, id ) {

const nombre= newDiplomado.newDiplomado
const disciplina= newDiplomado.disciplina

  let query = supabase.from("diplomados");
  // A) CREAR
  if (!id) {
    switch (disciplina) {
      case 'Desarrollo Humano':
        query = query.insert([{ DesarrolloHumano: nombre }]);
        break;
      case 'Descuentos':
        query = query.insert([{ Descuentos: nombre }]);
        break;
      case 'Ingeniería':
        query = query.insert([{ Ingeniería: nombre }]);
        break;
      case 'Negocios':
        query = query.insert([{ Negocios: nombre }]);
        break;
      case 'OnLive':
        query = query.insert([{ OnLive: nombre }]);
        break;
      case 'Psicología':
        query = query.insert([{ Psicología: nombre }]);
        break;
      case 'Salud':
        query = query.insert([{ Salud: nombre }]);
        break;
    }
  }
  // B) EDITAR
  if (id)
    query = query.update({ ...newDiplomado }).eq("id", id);

  const { data, error } = await query.select().single();
  //console.log(query)
  //console.log(data)


  if (error) {
    console.error(error);
    throw new Error("diplomados no pudo ser modificado");
  }

  return data;
}

export async function getDiplomados() {
  const { data, error } = await supabase.from("diplomados").select("*");

  if (error) {
    console.error(error);
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
    console.error(error);
    throw new Error("diplomados no pudo ser borrado");
  }

  return data;
}