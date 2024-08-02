import { motion } from "framer-motion";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

import { useCartPreviewContext } from "../../contexts/CartPreviewContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { getCart, getTotalPrice } from "../../stores/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../ui/Button";
import CartPreviewItem from "./CartPreviewItem";
import EmptyCart from "./EmptyCart";

export default function CartPreview() {
  const { isCartPreviewOpen, setIsCartPreviewOpen } = useCartPreviewContext();

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsCartPreviewOpen(false));

  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);
  const isCartEmpty = cart.length === 0;

  function handleToggleCart() {
    setIsCartPreviewOpen((isOpen) => !isOpen);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return createPortal(
    <motion.div
      variants={variants}
      initial={closed}
      animate={isCartPreviewOpen ? "open" : "closed"}
      transition={{ ease: "easeIn", duration: "0.3" }}
      className="absolute right-0 top-0 z-[60] grid h-screen w-[400px] bg-white"
      ref={ref}
    >
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
        <div className="flex w-full items-center justify-between border p-4">
          <span className="text-lg font-bold">Your cart</span>
          <IoMdClose
            onClick={handleToggleCart}
            className="cursor-pointer"
            size={30}
          />
        </div>
        <div className="p-4">
          <div>
            {isCartEmpty ? (
              <EmptyCart />
            ) : (
              <ul>
                {cart?.map((product) => (
                  <CartPreviewItem product={product} key={product.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="">
          <div className="bg-essentialBackground2 py-4">
            <div className="flex justify-between px-6 text-lg font-semibold">
              <span>Subtotal</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <p className="p-6 px-6 text-xs">
              Tax included and shipping calculated at checkout
            </p>
          </div>
          <div className="flex gap-4 p-4">
            <Button className="w-full text-center" to="cart">
              VIEW CART
            </Button>
            <Button
              to="checkout"
              disabled={true}
              className="w-full text-center"
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
