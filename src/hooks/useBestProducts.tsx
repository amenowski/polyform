import { useQuery } from "@tanstack/react-query";
import { getBestProducts } from "../services/apiProducts";

export function useBestProducts() {
  const { data: bestProducts, isPending } = useQuery({
    queryKey: ["bestProducts"],
    queryFn: getBestProducts,
  });

  return { bestProducts, isPending };
}
