import { PropsWithChildren, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../hooks/useUser";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return children;
}
