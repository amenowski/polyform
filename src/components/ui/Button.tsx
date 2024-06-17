import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
  isArrow?: boolean;
  to?: string;
  disabled?: boolean;
};

const buttonVariants = cva(
  "bg-white px-6 py-3 rounded-sm transition-all duration-300 hover:bg-[rgb(35,35,35)] text-black",
  {
    variants: {
      variant: {
        primary: " bg-white hover:bg-[rgb(35,35,35)]  hover:text-white",
        secondary:
          " bg-[rgb(35,35,35)] hover:bg-white text-white hover:text-[rgb(35,35,35)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export default function Button({
  children,
  disabled,
  variant,
  to,
  isArrow,
}: ButtonProps) {
  const arrowVariants = {
    initial: { x: "-10%", opacity: 0 },
    whileHover: { x: "0", opacity: 1, marginLeft: "5px" },
  };

  const arrowTransition = { ease: "easeInOut", duration: 0.2 };

  const content = (
    <>
      {children}
      {isArrow && (
        <motion.div
          className="-ml-8"
          variants={arrowVariants}
          transition={arrowTransition}
        >
          <IoArrowForward size={25} />
        </motion.div>
      )}
    </>
  );

  if (to) {
    return (
      <motion.button
        disabled={disabled}
        initial="initial"
        whileHover="whileHover"
      >
        <Link to={to} className={cn(buttonVariants({ variant }), `flex gap-2`)}>
          {content}
        </Link>
      </motion.button>
    );
  }

  return (
    <motion.button
      initial="initial"
      whileHover="whileHover"
      disabled={disabled}
      className={cn(buttonVariants({ variant }), `flex gap-2`)}
    >
      {content}
    </motion.button>
  );
}
