import { useProducts } from "../../hooks/useProducts";
import { ProductT } from "../../lib/types";
import Pagination from "../ui/Pagination";
import Product from "./ProductItem";
import ProductsSkeleton from "./ProductsSkeleton";

function Products() {
  const { products, isLoading, count } = useProducts();
  ``;
  if (isLoading) return <ProductsSkeleton />;

  if (products?.length === 0)
    return (
      <div className="flex w-full items-center justify-center">
        No products found in this category.
      </div>
    );

  return (
    <div className="flex flex-col gap-8">
      <div className="grid max-h-[30rem] min-h-[45rem] gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products?.map((product: ProductT) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <Pagination count={count} />
    </div>
  );
}

export default Products;
