import ShopProducts from "../components/ShopProducts";
import Container from "../components/ui/Container";
import ShopOperations from "../components/ui/ShopOperations";

export default function Shop() {
  return (
    <Container className="grid min-h-[750px] grid-cols-1 gap-8 px-4 py-20 md:grid-cols-[0.2fr_1fr] lg:px-8">
      <ShopOperations />
      <ShopProducts />
    </Container>
  );
}
