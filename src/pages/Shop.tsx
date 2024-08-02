import { useEffect } from "react";

import Container from "../components/layout/Container";
import Products from "../components/products/Products";
import ShopOperations from "../components/ui/ShopOperations";
import { scrollTop } from "../utils/helpers";

export default function Shop() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <Container className="p grid min-h-[750px] grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[0.2fr_1fr] lg:px-8">
      <ShopOperations />
      <Products />
    </Container>
  );
}
