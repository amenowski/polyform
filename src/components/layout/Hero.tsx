import { motion } from "framer-motion";

import HeroBg from "../../assets/images/hp1.webp";
import ImageScaleAnimation from "../ImageScaleAnimation";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="">
      <div className="h-[50rem]">
        <div className="absolute top-0 -z-[90] h-[60rem] w-full">
          <ImageScaleAnimation
            src={HeroBg}
            className="h-[60rem] w-full object-cover"
            duration={1}
            initialScale={2}
            animateScale={1.1}
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
              className="flex max-w-[1440px] flex-col items-start justify-center gap-3"
            >
              <span className="text-sm uppercase">new arrivals</span>
              <h1 className="md:leading-thight text-left text-6xl leading-none md:text-7xl">
                Elevate your <br /> space withluxe <br /> furniture!
              </h1>
              <span className="mb-4">
                Explore our collections for a wider selection.
              </span>
              <Button to="shop">Find out more</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
