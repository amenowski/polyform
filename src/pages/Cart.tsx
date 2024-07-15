import CartTable from "../components/cart/CartTable";
import Container from "../components/layout/Container";
import BestProducts from "../components/products/BestProducts";

export default function Cart() {
  return (
    <>
      <Container className="min-h-[50rem] py-12">
        <CartTable />
      </Container>
      <BestProducts />
    </>
  );
}
