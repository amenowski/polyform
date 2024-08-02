import Container from "../components/layout/Container";
import Products from "../components/products/Products";
import ShopOperations from "../components/ui/ShopOperations";

export default function Shop() {
  return (
    <Container className="p grid min-h-[750px] grid-cols-1 gap-8 px-4 py-40 md:grid-cols-[0.2fr_1fr] lg:px-8">
      <ShopOperations />
      <Products />
    </Container>
  );
}
