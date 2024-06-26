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

  const getCurp = (curpInput) => {
    const genderPosition = 10; 
    const gender = curpInput.charAt(genderPosition);
    if (gender === 'H') return 'H'
    else if (gender === 'M') return 'M';
    else if (gender === 'X') return 'X'; 
    else  return 'Gender not found';
  };
  
  let nuevoGenero;

  if (newCliente.curp) nuevoGenero = getCurp(newCliente.curp);

if(!newCliente.edad) newCliente.edad=null
if(!newCliente.numero_diplomados) newCliente.numero_diplomados=null
if(!newCliente.diplomados_terminados) newCliente.diplomados_terminados=null
if(!newCliente.dipl_sent) newCliente.dipl_sent=null
if(!newCliente.fecha_inicio) newCliente.fecha_inicio=null
if(!newCliente.fecha_fin) newCliente.fecha_fin=null
if(!newCliente.fecha_limite) newCliente.fecha_limite=null
if(!newCliente.fecha_inicio2) newCliente.fecha_inicio2=null
if(!newCliente.fecha_fin2) newCliente.fecha_fin2=null
if(!newCliente.fecha_limite2) newCliente.fecha_limite2=null

let status
let status2
if(!newCliente.status1){status=true}
if(!newCliente.status2){status2=true}
if(newCliente.status1){status=false}
if(newCliente.status2){status2=false}

  let query = supabase.from("cliente");
  // A) CREAR
  if (!id) query = query.insert([{ genero: nuevoGenero, ...newCliente }]);
  // B) EDITAR
  if (id) query = query.update({ ...newCliente, genero: nuevoGenero, cursa_actualmente: status, cursa_actualmente2: status2}).eq("id", id);


  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Cliente no pudo ser modificado");
  }

  return data;
}

export async function getClientes() {
  const { data, error } = await supabase.from("cliente").select("*");

  if (error) {
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
    throw new Error("Clientes no pudo ser borrado");
  }

  return data;
}