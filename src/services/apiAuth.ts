import supabase from "./supabase";

export async function signup(
  name: string,
  email: string,
  password: string,
  lastName: string,
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        lastName,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login(email: string, password: string) {
  let { data, error } = await supabase.auth.signInWithPassword({
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

export async function updateCurrentUserPassword(password: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) throw new Error(error.message);

  return { data };
}
