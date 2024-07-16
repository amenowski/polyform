import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCurrentUserPassword } from "../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: (password: string) => updateCurrentUserPassword(password),
    onSuccess: (data) => {
      toast.success("User account successfully updated.");
      navigate("/home");
      queryClient.setQueryData(["user"], data);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isPending };
}
