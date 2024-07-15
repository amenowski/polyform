import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useLogin } from "../hooks/useLogin";
import { LoginProps } from "../lib/types";
import Button from "./ui/Button";
import Input from "./ui/Input";
import SpinnerMini from "./ui/SpinnerMini";

export default function LoginForm() {
  const { login, isPending } = useLogin();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = ({ email, password }) => {
    console.log("Form submitted with:", email, password);
    setLoginError(null);
    login(
      { email, password },
      {
        onSuccess: () => {
          toast.success("Login successful");
          reset();
        },
        onError: (error) => {
          console.error("Login failed:", error);
          setLoginError(
            "Login failed. Please check your credentials and try again.",
          );
        },
        onSettled: () => {
          console.log("Login request settled");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Email"
          disabled={isPending}
          id="email"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please provide a valid email address",
            },
          })}
        />
        <p className="text-sm text-red-700">{errors?.email?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="password"
          placeholder="Password"
          disabled={isPending}
          {...register("password", {
            required: "This field is required",
          })}
        />
        <p className="text-sm text-red-700">{errors?.password?.message}</p>
      </div>
      {loginError && <p className="text-sm text-red-400">{loginError}</p>}
      <Button type="submit" variant="secondary" disabled={isPending}>
        {!isPending ? "Log in" : <SpinnerMini />}
      </Button>
    </form>
  );
}
