import supabase from "./supabase";

export async function getBestProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error)
    throw new Error("Something went wrong with fetching best products");

  return products;
}

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Something went wrong with fetching all products");

  return products;
}
