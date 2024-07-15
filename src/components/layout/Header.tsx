import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { CiBag1, CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { useCartPreviewContext } from "../../contexts/CartPreviewContext";
import { useNavigationContext } from "../../contexts/NavigationContext";
import { useLogout } from "../../hooks/useLogout";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useUser } from "../../hooks/useUser";
import { getTotalPrice } from "../../stores/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import CartPreview from "../cart/CartPreview";
import MobileNavigation from "../MobileNavigation";
import Navigation from "../Navigation";
import Overlay from "../Overlay";
import SearchPreview from "../search/SearchPreview";
import Logo from "../ui/Logo";
import Container from "./Container";

export default function Header() {
  const isHomePage = useLocation().pathname === "/home";

  const { isAuthenticated } = useUser();

  return (
    <>
      <header className="relative z-50 w-full border-b py-4 text-white">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Logo />
            <Navigation />
          </div>

          <div className="relative flex items-center gap-2">
            {isAuthenticated ? (
              <UserMenu isHomePage={isHomePage} />
            ) : (
              <GuestMenu isHomePage={isHomePage} />
            )}
            <HeaderIcons isHomePage={isHomePage} />
          </div>
        </Container>
      </header>
      <MobileNavigation />
      <CartPreview />
    </>
  );
}

function HeaderIcons({ isHomePage }: { isHomePage: boolean }) {
  const [isSearchbarPreviewOpen, setIsSearchbarPreviewOpen] = useState(false);
  const { isNavigationOpen, setIsNavigationOpen } = useNavigationContext();
  const { isCartPreviewOpen, setIsCartPreviewOpen } = useCartPreviewContext();
  const totalPrice = useSelector(getTotalPrice);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsSearchbarPreviewOpen(false));

  function handleToggleSearchbarPreview() {
    setIsSearchbarPreviewOpen((isOpen) => !isOpen);
  }

  function handleOpenNavigation() {
    setIsNavigationOpen(true);
  }

  function handleOpenCart() {
    setIsCartPreviewOpen(true);
  }

  return (
    <>
      <CiSearch
        onClick={handleToggleSearchbarPreview}
        size={45}
        className={`cursor-pointer p-2 ${
          isHomePage
            ? "text-white hover:bg-white hover:text-black"
            : "text-black hover:bg-black hover:text-white"
        }`}
      />
      <AnimatePresence>
        {isSearchbarPreviewOpen && <SearchPreview ref={ref} />}
      </AnimatePresence>
      <div
        onClick={handleOpenCart}
        className={`flex cursor-pointer items-center gap-1 p-2 ${
          isHomePage
            ? "hover:bg-white hover:text-black"
            : "text-black hover:bg-black hover:text-white"
        }`}
      >
        <CiBag1 size={30} />
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <CiMenuBurger
        onClick={handleOpenNavigation}
        className={`block cursor-pointer md:hidden ${
          isHomePage ? "text-white" : "text-black"
        }`}
        size={30}
      />

      {isSearchbarPreviewOpen || isNavigationOpen || isCartPreviewOpen ? (
        <Overlay />
      ) : null}
    </>
  );
}

function UserMenu({ isHomePage }: { isHomePage: boolean }) {
  const { user } = useUser();
  const { logout } = useLogout();

  return (
    <div className="group relative">
      <CiUser
        className={`cursor-pointer p-2 ${
          isHomePage
            ? "hover:bg-white hover:text-black"
            : "text-black hover:bg-black hover:text-white"
        }`}
        size={45}
      />
      <div className="absolute right-0 top-10 hidden w-60 bg-white py-6 text-black group-hover:block">
        <div className="mb-4 px-6">
          <h3 className="font-bold">{`${user?.user_metadata.name} ${user?.user_metadata.lastName}`}</h3>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <Link
            className="px-6 py-2 hover:bg-essentialBackground2"
            to="account"
          >
            Account
          </Link>
          <span
            onClick={() => logout()}
            className="cursor-pointer px-6 py-2 hover:bg-essentialBackground2"
          >
            Log out
          </span>
        </div>
      </div>
    </div>
  );
}

function GuestMenu({ isHomePage }: { isHomePage: boolean }) {
  return (
    <Link to="login">
      <CiUser
        className={`cursor-pointer p-2 ${
          isHomePage
            ? "hover:bg-white hover:text-black"
            : "text-black hover:bg-black hover:text-white"
        }`}
        size={45}
      />
    </Link>
  );
}
