import { Link } from "react-router-dom";

import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto grid max-w-[1540px] gap-10 border-y px-4 py-16 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.8fr] lg:justify-items-center">
        <Logo variant="black" />

        <ul className="flex flex-col gap-2">
          <li className="mb-2 text-lg text-black">Categories</li>
          <li>
            <Link to="shop?categories=sofas">Sofas</Link>
          </li>
          <li>
            <Link to="shop?categories=beds">Beds</Link>
          </li>
          <li>
            <Link to="shop?categories=armchairs">Armchair</Link>
          </li>
          <li>
            <Link to="shop?categories=poufs">Poufs</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="mb-2 text-lg text-black">Shop by room</li>
          <li>
            <Link to="shop?categories=livingroom">Living room</Link>
          </li>
          <li>
            <Link to="shop?categories=bedroom">Bedroom</Link>
          </li>
          <li>
            <Link to="shop?categories=diningroom">Dining room</Link>
          </li>

          <li>
            <Link to="shop?categories=office">Office</Link>
          </li>
        </ul>
      </div>
      <div className="py-8 text-center text-sm">
        © 2024 Polyform. All rights reserved
      </div>
    </footer>
  );
}
