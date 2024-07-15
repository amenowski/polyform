import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useSignup } from "../hooks/useSignup";
import { SignupProps } from "../lib/types";
import Button from "./ui/Button";
import Input from "./ui/Input";
import SpinnerMini from "./ui/SpinnerMini";

export default function SignupForm() {
  const { signup, isPending } = useSignup();
  const [signUpError, setSignUpError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<SignupProps>();

  const onSubmit: SubmitHandler<SignupProps> = ({
    name,
    lastName,
    email,
    password,
  }) => {
    console.log("Form submitted with:", email, password);
    setSignUpError(null);
    signup(
      { name, lastName, email, password },
      {
        onSuccess: () => {
          toast.success("Accout created successfully");
          reset();
        },
        onError: () => {
          setSignUpError(
            "Signup failed, check your email and password. Try again.",
          );
        },
        onSettled: () => {
          console.log("Signup request settled");
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Name"
          disabled={isPending}
          id="name"
          type="text"
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 4,
              message: "Name must be at least 4 characters",
            },
          })}
        />
        <p className="text-sm text-red-700">{errors?.name?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Last name"
          disabled={isPending}
          type="text"
          {...register("lastName", {
            required: "This field is required",
          })}
        />
        <p className="text-sm text-red-400">{errors?.lastName?.message}</p>
      </div>
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
        <p className="text-sm text-red-400">{errors?.email?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="password"
          placeholder="Password"
          disabled={isPending}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
        <p className="text-sm text-red-400">{errors?.password?.message}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="password"
          placeholder="Repeat password"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords need to match",
          })}
        />
        <p className="text-sm text-red-400">
          {errors?.passwordConfirm?.message}
        </p>
      </div>
      {signUpError && <p className="text-sm text-red-400">{signUpError}</p>}
      <Button type="submit" variant="secondary" disabled={isPending}>
        {!isPending ? "Sign Up" : <SpinnerMini />}
      </Button>
    </form>
  );
}
