import { motion } from "framer-motion";
import { ReactNode } from "react";

type TextFadeAnimation = {
  children: ReactNode;
  className: string;
  duration: number;
  initialY: string;
  animateY: number;
};

export default function TextFadeAnimation({
  children,
  className,
  duration,
  initialY,
  animateY,
}: TextFadeAnimation) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{
        y: animateY,
        opacity: 1,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
