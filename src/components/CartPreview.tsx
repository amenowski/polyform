import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

import { useCartPreviewContext } from "../contexts/CartPreviewContext";
import { getCart } from "../stores/cartSlice";
import CartPreviewItem from "./CartPreviewItem";
import EmptyCart from "./ui/EmptyCart";

export default function CartPreview() {
  const { isCartPreviewOpen, setIsCartPreviewOpen } = useCartPreviewContext();
  const initialRender = useRef(true);

  const cart = useSelector(getCart);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  function handleToggleCart() {
    setIsCartPreviewOpen((isOpen) => !isOpen);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return createPortal(
    <motion.div
      initial={initialRender.current ? false : "closed"}
      variants={variants}
      animate={isCartPreviewOpen ? "open" : "closed"}
      transition={{ ease: "easeIn", duration: "0.3" }}
      className="absolute right-0 top-0 z-50 h-screen w-[400px] bg-white"
    >
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
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <ul>
              {cart?.map((product) => (
                <CartPreviewItem product={product} key={product.id} />
              ))}
            </ul>
          )}
        </div>
        <div></div>
      </div>
    </motion.div>,
    document.body,
  );
}
