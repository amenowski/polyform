import { IoLeafOutline } from "react-icons/io5";
import Essentials from "../components/Essentials";
import Features from "../components/Features";
import Hero from "../components/Hero";
import { StickyScroll } from "../components/StickyScroll";
import { CiHeart } from "react-icons/ci";
import { LiaCottonBureau } from "react-icons/lia";

import Sticky1 from "../assets/images/sticky-1.webp";
import Sticky2 from "../assets/images/sticky-2.webp";
import Sticky3 from "../assets/images/sticky-3.webp";

const content = [
  {
    title: "Living room",
    subtile: "",
    emote: <LiaCottonBureau size={50} />,
    description:
      "The spacious living room features modern décor and ample natural light, creating a warm and inviting atmosphere perfect for relaxation and entertaining.",

    content: (
      <img
        key="1"
        alt="Living room"
        src={Sticky1}
        className="flex items-center justify-center text-white"
      />
    ),
  },
  {
    title: "Bedroom",
    subtile: "",
    emote: <IoLeafOutline size={50} />,
    description:
      "The cozy bedroom boasts a serene ambiance with its soft color palette, plush carpeting, and ample closet space, ideal for restful nights and peaceful mornings.",
    content: (
      <img
        key="1"
        alt="Bedroom"
        src={Sticky2}
        className="flex items-center justify-center text-white"
      />
    ),
  },
  {
    title: "RWS Wool",
    subtile: "",
    emote: <CiHeart size={50} />,
    description:
      "The elegant dining room is designed for memorable gatherings, featuring a stylish chandelier, hardwood floors, and plenty of space for a large dining table.",
    content: (
      <img
        key="1"
        alt="Dining Room"
        src={Sticky3}
        className="flex items-center justify-center text-white"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Essentials />
      <StickyScroll content={content} />
    </>
  );
}
