import React from "react";

type InputProps = {
  type: "text" | "number" | "email" | "password";
  value?: string;
  placeholder: string;
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(
  { type, value, placeholder, disabled, onChange, id, ...rest }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      ref={ref}
      {...rest}
      className="w-full rounded-sm border px-4 py-3 outline-none transition-all duration-300 placeholder:text-black hover:border-black focus:border-gray-400 focus:ring-4 focus:ring-gray-400"
    />
  );
}

const forwardRefInput = React.forwardRef(Input);

export default forwardRefInput;
