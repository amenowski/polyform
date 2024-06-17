import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Container from "./ui/Container";
import Logo from "./ui/Logo";

import { CiUser, CiSearch, CiBag1, CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const currentPage = useLocation().pathname;
  const isHomePage = currentPage === "/home";

  function handleOpenMenu() {}

  function handleOpenCart() {}

  function handleOpenSearch() {}

  return (
    <header className="w-full border-b py-4 text-white">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center gap-2">
          <Link to="account">
            <CiUser
              className={`cursor-pointer p-2 ${
                isHomePage
                  ? "hover:bg-white hover:text-black"
                  : "text-black hover:bg-black hover:text-white"
              }`}
              size={45}
            />
          </Link>
          <CiSearch
            size={45}
            className={`cursor-pointer p-2 ${
              isHomePage
                ? "text-white hover:bg-white hover:text-black"
                : "text-black hover:bg-black hover:text-white"
            }`}
          />
          <div
            className={`flex cursor-pointer items-center gap-1 p-2 ${
              isHomePage
                ? "hover:bg-white hover:text-black"
                : "text-black hover:bg-black hover:text-white"
            }`}
          >
            <CiBag1 size={30} />
            <span>$232.20</span>
          </div>
          <CiMenuBurger
            onClick={handleOpenMenu}
            className={`block cursor-pointer md:hidden ${
              isHomePage ? "text-white" : "text-black"
            }`}
            size={30}
          />
        </div>
      </Container>
    </header>
  );
}
