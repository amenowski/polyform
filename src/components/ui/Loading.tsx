import { HashLoader } from "react-spinners";

import { cn } from "../../utils/cn";

type LoadingProps = {
  className?: string;
};

export default function Loading({ className }: LoadingProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center text-3xl",
        className,
      )}
    >
      <HashLoader color="#0000" />
    </div>
  );
}
