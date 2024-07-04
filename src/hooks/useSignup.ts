import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { useSignupProps } from "../lib/types";
import { signup as signupApi } from "../services/apiAuth";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ name, email, password, lastName }: useSignupProps) =>
      signupApi(name, email, password, lastName),
    onError: (err) => {
      console.log("ERROR", err);
    },
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });

  return { signup, isPending };
}
