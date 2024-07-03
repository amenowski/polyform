import { useBestProducts } from "../hooks/useBestProducts";
import Container from "./ui/Container";
import ProductsSlider from "./ui/ProductsSlider";

export default function BestProducts() {
  const { bestProducts, isLoading } = useBestProducts();

  return (
    <div className="bg-essentialBackground2 py-4">
      <Container>
        <div className="border-b border-b-black">
          <h3 className="mb-6 text-4xl font-extralight">
            Our top pick just for you
          </h3>
        </div>
        <div className="pt-8">
          <ProductsSlider products={bestProducts} isLoading={isLoading} />
        </div>
      </Container>
    </div>
  );
}
