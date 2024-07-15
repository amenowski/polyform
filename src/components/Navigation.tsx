import { GoChevronDown } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

import Dropdown from "./ui/Dropdown";

export default function Navigation() {
  const currentPage = useLocation().pathname;
  const isHomePage = currentPage === "/home";

  return (
    <nav className="hidden md:block">
      <ul
        className={`flex gap-6 font-semibold ${
          isHomePage ? "text-white" : "text-black"
        }`}
      >
        <li
          className={`group px-4 py-2 transition-all duration-150 ${
            isHomePage
              ? "hover:bg-white hover:text-black"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <Link className="gorup/shop flex items-center gap-2" to="shop">
            <span>Shop</span>
            <GoChevronDown />
          </Link>
          <Dropdown />
        </li>
      </ul>
    </nav>
  );
}
