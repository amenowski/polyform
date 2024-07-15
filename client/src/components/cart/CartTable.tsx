import { useSelector } from "react-redux";

import { getCart, getTotalPrice } from "../../stores/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../ui/Button";
import CartTableItem from "./CartTableItem";
import EmptyCart from "./EmptyCart";

function CartTable() {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="py-16">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div role="table" className="max-h-[600px] overflow-y-auto uppercase">
            <header className="hidden grid-cols-[1fr_0.7fr_0.7fr_0.3fr] grid-rows-2 border-b border-black pb-4 text-center text-sm md:grid">
              <div className="text-left">Product</div>
              <div className="row-span-2">Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </header>
            <main className="divide-y border-b">
              {cart.map((product) => (
                <CartTableItem product={product} key={product.id} />
              ))}
            </main>
          </div>
          <div className="flex justify-end gap-4 py-10 text-gray-500">
            <div className="text-right">
              <h5 className="mb-2 text-2xl">{formatCurrency(totalPrice)}</h5>
              <p className="mb-8 text-sm">
                Taxes and shipping calculated at checkout
              </p>
              <Button variant="primary">checkout</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartTable;
