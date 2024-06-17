import { Link, useLocation } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";

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
          className={`px-4 py-2 duration-150 transition-all  ${
            isHomePage
              ? "hover:bg-white hover:text-black"
              : "hover:bg-black hover:text-white"
          }`}
        >
          <Link className=" flex gap-2 items-center" to="shop">
            <span>Shop</span>
            <GoChevronDown />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
