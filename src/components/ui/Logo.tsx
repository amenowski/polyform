import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../../assets/images/logo-white.webp";
import LogoBlack from "../../assets/images/logo-black.webp";

export default function Logo() {
  const currentPage = useLocation().pathname;
  const isHomePage = currentPage === "/home";

  return (
    <Link to="home">
      {isHomePage ? (
        <img src={LogoWhite} alt="Logo" />
      ) : (
        <img src={LogoBlack} alt="Logo" />
      )}
    </Link>
  );
}
