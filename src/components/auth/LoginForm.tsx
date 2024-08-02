import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../../hooks/useLogin";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SpinnerMini from "../ui/SpinnerMini";
import FormRow from "./FormRow";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { login, isPending } = useLogin();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = ({ email, password }) => {
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
      <FormRow>
        <Input
          placeholder="Email"
          disabled={isPending}
          id="email"
          type="email"
          {...register("email")}
        />
        <p className="text-sm text-red-700">{errors?.email?.message}</p>
      </FormRow>

      <FormRow>
        <Input
          type="password"
          placeholder="Password"
          disabled={isPending}
          {...register("password")}
        />
        <p className="text-sm text-red-700">{errors?.password?.message}</p>
      </FormRow>
      {loginError && <p className="text-sm text-red-400">{loginError}</p>}
      <Button type="submit" variant="secondary" disabled={isPending}>
        {!isPending ? "Log in" : <SpinnerMini />}
      </Button>
    </form>
  );
}
