import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto grid max-w-[1540px] gap-10 border-y px-4 py-16 text-sm text-gray-600 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.8fr] lg:justify-items-center">
        <Logo variant="black" />

        <ul className="flex flex-col gap-2">
          <li className="mb-2 text-lg text-black">Help</li>
          <li>Customer Help/FAQs</li>
          <li>About Us</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="mb-2 text-lg text-black">Categories</li>
          <li>Sofas</li>
          <li>Beds</li>
          <li>Armchair</li>
          <li>Poufs</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="mb-2 text-lg text-black">Shop by room</li>
          <li>Living room</li>
          <li>Bedroom</li>
          <li>Dining room</li>
          <li>Office</li>
        </ul>
      </div>
      <div className="py-8 text-center text-sm">
        © 2024 Polyform. All rights reserved
      </div>
    </footer>
  );
}
