import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LoginProps } from "../lib/types";
import { login as loginApi } from "../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginProps) => loginApi(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { login, isPending };
}
