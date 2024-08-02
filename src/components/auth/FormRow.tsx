import { ReactNode } from "react";

import { cn } from "../../utils/cn";

type FormRowProps = {
  children: ReactNode;
  className?: string;
};

export default function FormRow({ children, className }: FormRowProps) {
  return <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
}
