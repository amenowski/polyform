import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

type SortBy = {
  direction: string;
  field: string;
};

type Filter = {
  value: string;
};

type getProductsProps = {
  filter: Filter | null;
  sortBy: SortBy;
  page: number;
  categories: string[];
};
export async function getBestProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error)
    throw new Error("Something went wrong with fetching best products");

  return products;
}

export async function getProductByName(name: string) {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("name", name);

  if (error) throw new Error("Something went wrong with fetching product");

  return product;
}
export async function getProducts({
  filter,
  sortBy,
  page,
  categories,
}: getProductsProps) {
  let query = supabase.from("products").select("*", { count: "exact" });

  // Filter
  console.log(query);
  if (filter) query = query.eq("isOnSale", filter.value);

  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // Pagination

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  // Categories

  if (categories) {
    query = query.contains("category", categories);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could be not loaded");
  }

  return { products, count };
}
export async function getSearchProducts(query: string) {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .textSearch("name", query);

  if (error) throw new Error("Something went wrong with fetching product");

  console.log(products);

  return products;
}
