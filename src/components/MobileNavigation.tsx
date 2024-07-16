import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import { useNavigationContext } from "../contexts/NavigationContext";
import { useUser } from "../hooks/useUser";
import Logo from "./ui/Logo";

export default function MobileNavigation() {
  const { isNavigationOpen, setIsNavigationOpen } = useNavigationContext();
  const initialRender = useRef(true);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
  }, []);

  function handleToggleNavigation() {
    setIsNavigationOpen((isOpen) => !isOpen);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return createPortal(
    <motion.div
      initial={initialRender.current ? false : "closed"}
      variants={variants}
      animate={isNavigationOpen ? "open" : "closed"}
      transition={{ ease: "easeIn", duration: "0.3" }}
      className="absolute right-0 top-0 z-[60] h-screen w-[400px] bg-white p-4"
    >
      <div className="flex items-center justify-between border-b pb-4">
        <Logo variant="black" />
        <IoMdClose
          onClick={handleToggleNavigation}
          className="cursor-pointer"
          size={30}
        />
      </div>
      <ul className="flex flex-col gap-2 py-4 text-lg">
        <li className="w-full cursor-pointer p-2 transition-all duration-200 hover:bg-hoverBackground hover:text-white">
          <Link to="shop">Shop</Link>
        </li>
        <li className="w-full cursor-pointer p-2 transition-all duration-200 hover:bg-hoverBackground hover:text-white">
          {isAuthenticated ? (
            <Link to="account">Account</Link>
          ) : (
            <Link to="login">Login</Link>
          )}
        </li>
      </ul>
    </motion.div>,
    document.body,
  );
}
