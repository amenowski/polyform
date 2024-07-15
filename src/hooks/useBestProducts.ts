import { useQuery } from "@tanstack/react-query";
import { getBestProducts } from "../services/apiProducts";

export function useBestProducts() {
  const { data: bestProducts, isLoading } = useQuery({
    queryKey: ["bestProducts"],
    queryFn: getBestProducts,
  });

  return { bestProducts, isLoading };
}
