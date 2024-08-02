import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useSignup } from "../../hooks/useSignup";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SpinnerMini from "../ui/SpinnerMini";
import FormRow from "./FormRow";

const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name must be max 30 characters"),
    lastName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name must be max 30 characters"),
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormData = z.infer<typeof signupSchema>;
export default function SignupForm() {
  const { signup, isPending } = useSignup();
  const [signUpError, setSignUpError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = ({
    name,
    lastName,
    email,
    password,
  }) => {
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
      <FormRow>
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
      </FormRow>
      <FormRow>
        <Input
          placeholder="Last name"
          disabled={isPending}
          type="text"
          {...register("lastName")}
        />
        <p className="text-sm text-red-400">{errors?.lastName?.message}</p>
      </FormRow>
      <FormRow>
        <Input
          placeholder="Email"
          disabled={isPending}
          id="email"
          type="email"
          {...register("email")}
        />
        <p className="text-sm text-red-400">{errors?.email?.message}</p>
      </FormRow>
      <FormRow>
        <Input
          type="password"
          placeholder="Password"
          disabled={isPending}
          {...register("password")}
        />
        <p className="text-sm text-red-400">{errors?.password?.message}</p>
      </FormRow>
      <FormRow>
        <Input
          type="password"
          placeholder="Repeat password"
          disabled={isPending}
          {...register("confirmPassword")}
        />
        <p className="text-sm text-red-400">
          {errors?.confirmPassword?.message}
        </p>
      </FormRow>
      {signUpError && <p className="text-sm text-red-400">{signUpError}</p>}
      <Button type="submit" variant="secondary" disabled={isPending}>
        {!isPending ? "Sign Up" : <SpinnerMini />}
      </Button>
    </form>
  );
}
