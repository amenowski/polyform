import BestProducts from "../components/BestProducts";
import CartTable from "../components/CartTable";
import Container from "../components/ui/Container";

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
