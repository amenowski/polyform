import { useProducts } from "../hooks/useProducts";
import { Product as ProductT } from "../lib/types";
import Loading from "./ui/Loading";
import Pagination from "./ui/Pagination";
import Product from "./ui/Product";

function ShopProducts() {
  const { products, isLoading, count } = useProducts();

  if (isLoading) return <Loading />;

  if (products?.length === 0)
    return (
      <div className="flex w-full items-center justify-center">
        No products found in this category.
      </div>
    );

  return (
    <div className="flex flex-col gap-2">
      <div className="grid min-h-[30rem] gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products?.map((product: ProductT) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <Pagination count={count} />
    </div>
  );
}

export default ShopProducts;
