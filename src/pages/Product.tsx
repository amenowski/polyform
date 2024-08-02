import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "../components/layout/Container";
import ProductDetails from "../components/products/ProductDetails";
import Loading from "../components/ui/Loading";
import { useProduct } from "../hooks/useProduct";
import { revertFormattedName, scrollTop } from "../utils/helpers";

export default function Product() {
  const { name } = useParams();
  const formattedName = revertFormattedName(name || "");
  const { product, isLoading } = useProduct(formattedName);

  useEffect(() => {
    scrollTop();
  }, []);

  if (isLoading) return <Loading className="min-h-[50rem]" />;

  return (
    <Container>
      <ProductDetails product={product[0]} />
    </Container>
  );
}
