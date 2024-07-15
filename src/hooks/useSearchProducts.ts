import { useQuery } from "@tanstack/react-query";

import { getSearchProducts } from "../services/apiProducts";

export function useSearchProducts(query: string) {
  const { data: searchProducts, isLoading } = useQuery({
    queryKey: ["searchProducts"],
    queryFn: () => getSearchProducts(query),
  });

  return { searchProducts, isLoading };
}
