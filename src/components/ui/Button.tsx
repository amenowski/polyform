import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "../../utils/cn";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "third";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  to?: string;
  disabled?: boolean;
  className?: string;
};

const buttonVariants = cva(
  "bg-white z-50 px-8 py-3 rounded-sm transition-all duration-300 text-black",
  {
    variants: {
      variant: {
        primary: " bg-white border hover:bg-essentialBackground2 border-black",
        secondary:
          " bg-hoverBackground border hover:bg-white text-white hover:text-hoverBackground",
        third: " border hover:border-black",
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
  onClick,
  className,
}: ButtonProps) {
  if (to) {
    return (
      <Link
        to={!disabled ? to : "/shop"}
        className={`${disabled ? "cursor-not-allowed" : ""} ${className} ${cn(buttonVariants({ variant }))}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "cursor-not-allowed" : ""} ${className} ${cn(buttonVariants({ variant }))}`}
    >
      {children}
    </button>
  );
}
