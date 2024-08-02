import { Link, useLocation } from "react-router-dom";

import LogoBlack from "../../assets/images/logo-black.webp";
import LogoWhite from "../../assets/images/logo-white.webp";

type LogoProps = {
  variant?: "white" | "black";
};

export default function Logo({ variant = "white" }: LogoProps) {
  const currentPage = useLocation().pathname;
  const isHomePage = currentPage === "/home";

  if (variant === "black") {
    return (
      <Link to="home">
        <img src={LogoBlack} alt="Logo" />
      </Link>
    );
  }

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
