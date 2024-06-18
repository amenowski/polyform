import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
  to?: string;
  disabled?: boolean;
};

const buttonVariants = cva(
  "bg-white px-6 py-3 rounded-sm transition-all duration-300 hover:bg-hoverBackground text-black",
  {
    variants: {
      variant: {
        primary: " bg-white hover:bg-hoverBackground  hover:text-white",
        secondary:
          " bg-hoverBackground hover:bg-white text-white hover:text-hoverBackground",
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
}: ButtonProps) {
  if (to) {
    return (
      <Link to={to} className={cn(buttonVariants({ variant }))}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={cn(buttonVariants({ variant }))}>
      {children}
    </button>
  );
}
