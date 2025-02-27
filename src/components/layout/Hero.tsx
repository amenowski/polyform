import { motion } from "framer-motion";

import HeroBg from "../../assets/images/hp1.webp";
import ImageScaleAnimation from "../ImageScaleAnimation";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div>
      <ImageScaleAnimation
        src={HeroBg}
        className="-mt-12 min-h-[40rem] w-full object-cover lg:min-h-[60rem]"
        duration={1}
        initialScale={1.4}
        animateScale={1.1}
        alt="Hero image with sofa from our shop"
      />
      <div className="absolute inset-0 mx-auto flex max-w-[1440px] flex-col items-start justify-center gap-4 px-4 text-white">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="relative flex max-w-[1440px] flex-col items-start justify-center gap-3"
        >
          <span className="text-sm uppercase">new arrivals</span>
          <h1 className="md:leading-thight text-left text-6xl leading-none md:text-7xl">
            Elevate your <br /> space withluxe <br /> furniture!
          </h1>
          <span className="mb-4">
            Explore our collections for a wider selection.
          </span>
          <Button className="relative z-50" to="/shop">
            Find out more
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
