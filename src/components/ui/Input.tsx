import React, { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input"> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function Input(
  { onChange, className, ...rest }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      onChange={onChange}
      ref={ref}
      {...rest}
      className={`w-full rounded-sm border px-4 py-3 outline-none transition-all duration-300 placeholder:text-black hover:border-black focus:border-gray-400 focus:ring-4 focus:ring-gray-400 ${className}`}
    />
  );
}

const forwardRefInput = React.forwardRef(Input);

export default forwardRefInput;
