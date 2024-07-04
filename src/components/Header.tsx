import { CiBag1, CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { useCartPreviewContext } from "../contexts/CartPreviewContext";
import { useNavigationContext } from "../contexts/NavigationContext";
import { useLogout } from "../hooks/useLogout";
import { useUser } from "../hooks/useUser";
import { getTotalPrice } from "../stores/cartSlice";
import { formatCurrency } from "../utils/helpers";
import CartPreview from "./CartPreview";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import Container from "./ui/Container";
import Logo from "./ui/Logo";

export default function Header() {
  const { setIsNavigationOpen } = useNavigationContext();
  const { setIsCartPreviewOpen } = useCartPreviewContext();
  const totalPrice = useSelector(getTotalPrice);

  const currentPage = useLocation().pathname;
  const isHomePage = currentPage === "/home";

  const { user, isAuthenticated } = useUser();
  const { logout } = useLogout();

  function handleOpenNavigation() {
    setIsNavigationOpen(true);
  }

  function handleOpenCart() {
    setIsCartPreviewOpen(true);
  }

  function handleOpenSearch() {}

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
            ) : (
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
            )}
            <CiSearch
              size={45}
              className={`cursor-pointer p-2 ${
                isHomePage
                  ? "text-white hover:bg-white hover:text-black"
                  : "text-black hover:bg-black hover:text-white"
              }`}
            />
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
          </div>
        </Container>
      </header>
      <MobileNavigation />
      <CartPreview />
    </>
  );
}
