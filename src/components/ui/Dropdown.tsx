import { Link } from "react-router-dom";

export default function Dropdown() {
  const dropdownCategories = [
    {
      title: "Categories",
      items: [
        { name: "Sofas", link: "shop?categories=sofas" },
        { name: "Beds", link: "shop?categories=beds" },
        { name: "Armchairs", link: "shop?categories=armchairs" },
        { name: "Poufs", link: "shop?categories=poufs" },
      ],
    },
    {
      title: "Shop by Room",
      items: [
        { name: "Living Room", link: "shop?categories=livingroom" },
        { name: "Bedroom", link: "shop?categories=bedroom" },
        { name: "Dining Room", link: "shop?categories=diningroom" },
        { name: "Office", link: "shop?categories=office" },
      ],
    },
    {
      title: "Featured",
      items: [{ name: "On Sale", link: "shop?isDiscount=yes" }],
    },
    {
      title: "Shop by Collection",
      items: [
        { name: "Modern", link: "shop/modern" },
        { name: "Traditional", link: "shop/traditional" },
        { name: "Vintage", link: "shop/vintage" },
        { name: "Scandinavian", link: "shop/scandinavian" },
      ],
    },
  ];

  return (
    <div className="absolute -bottom-[260px] left-0 hidden h-72 w-full bg-white text-black group-hover:block group-focus:block">
      <div className="mx-auto max-w-[1440px] px-4 py-10">
        <div className="grid w-full grid-cols-4 border-b pb-4">
          {dropdownCategories.map((category, index) => (
            <span key={index} className="font-semibold">
              {category.title}
            </span>
          ))}
        </div>
        <Dropdown />
        <div className="grid grid-cols-4">
          {dropdownCategories.map((category, index) => (
            <ul key={index} className="flex flex-col gap-2 py-4">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="underline-hover w-fit">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
