import supabase, { supabaseUrl } from "./supabase";


export async function signup({ fullName, email, password, phone, rol }) {
  // Check if user already exists
  const { data: users, error: fetchError } = await supabase
    .from("usuario")
    .select("*")
    .eq("email", email)
    .limit(1);

  if (fetchError) {
    throw new Error(fetchError.message);
  }

  if (users.length > 0) {
    throw new Error("Email already registered");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        phone,
        rol,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message); 
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getUserRol() {
  const { data: { user },} = await supabase.auth.getUser();
  return user.user_metadata.rol;
}  

export async function updateCurrentUser({ password, fullName, avatar }) {
  // A1. Get old name
  async function GetOldName() {
    const { data: { user },} = await supabase.auth.getUser();
    return user.user_metadata.fullName; }
    const OldUserName = await GetOldName();

  // 1. Update password OR fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  
  const { data, error } = await supabase.auth.updateUser(updateData);
  
//A2. Update all tables with their now user
  async function GetNewName() {
    const { data: { user },} = await supabase.auth.getUser();
    return user.user_metadata.fullName; }
    const NewUserName = await GetNewName();     
   //update ^^^^
   await supabase.from('productos').update({ nombre: NewUserName }).eq('nombre', OldUserName);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
