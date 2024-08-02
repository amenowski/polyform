import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCartPreviewContext } from "../../contexts/CartPreviewContext";
import { ProductT } from "../../lib/types";
import { addToCart, getCurrentProductQuantity } from "../../stores/cartSlice";
import Button from "../ui/Button";

type AddToCartProps = {
  product: ProductT;
};

export default function AddToCart({ product }: AddToCartProps) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { setIsCartPreviewOpen } = useCartPreviewContext();

  const currentQuantity = useSelector(getCurrentProductQuantity(product.id));
  const isInCart = currentQuantity > 0;

  function handleAddProduct(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (Number(quantity) <= 0) return;

    const newProduct: ProductT = {
      ...product,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };

    setIsCartPreviewOpen(true);
    dispatch(addToCart(newProduct));
  }

  return (
    <div className="flex flex-col border-b pb-4">
      <input
        className="mb-4 w-20 border p-2"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      {isInCart ? (
        <Button variant="secondary" to="/cart">
          View in cart
        </Button>
      ) : (
        <Button variant="secondary" onClick={handleAddProduct}>
          Add to cart
        </Button>
      )}
    </div>
  );
}
