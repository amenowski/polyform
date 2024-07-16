import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUpdateUser } from "../hooks/useUpdateUser";
import Button from "./ui/Button";
import Input from "./ui/Input";

type FormData = {
  password: string;
  passwordConfirm?: string;
};

export default function UpdatePasswordForm() {
  const { register, handleSubmit, formState, reset, getValues } =
    useForm<FormData>();
  const { errors } = formState;
  const [signUpError, setSignUpError] = useState<string | null>(null);

  const { updateUser, isPending } = useUpdateUser();

  const onSubmit: SubmitHandler<FormData> = ({ password }) => {
    setSignUpError(null);
    updateUser(password, {
      onSuccess: () => {
        reset();
      },
      onError: () => {
        setSignUpError("Password update failed");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 py-4"
    >
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
        <p className="text-sm text-red-400">{errors.password?.message}</p>
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
      <Button variant="secondary" type="submit" disabled={isPending}>
        Update Password
      </Button>
    </form>
  );
}
