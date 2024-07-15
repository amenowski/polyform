import { ProductT } from "../../lib/types";
import SpinnerMini from "../ui/SpinnerMini";

type SearchProductsProps = {
  searchProducts: ProductT[];
  isLoading: boolean;
};

export default function SearchProducts({
  searchProducts,
  isLoading,
}: SearchProductsProps) {
  console.log(searchProducts);

  return (
    <div>
      {isLoading ? <SpinnerMini /> : null}
      {searchProducts?.map((product) => <p>{product.name}</p>)}
    </div>
  );
}
