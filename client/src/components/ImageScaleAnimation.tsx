import { motion, MotionProps } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

type ImageScaleAnimationProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "onAnimationStart"
> &
  MotionProps & {
    src: string;
    initialScale: number;
    animateScale: number;
    duration: number;
  };

export default function ImageScaleAnimation({
  src,
  initialScale,
  animateScale,
  duration,
  ...rest
}: ImageScaleAnimationProps) {
  return (
    <motion.img
      src={src}
      className="h-[60rem] w-full object-cover"
      initial={{ scale: initialScale }}
      whileInView={{
        scale: animateScale,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      {...rest}
    />
  );
}
