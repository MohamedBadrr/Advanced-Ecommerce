
import { useAppSelector } from "@/store/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { loginData } = useAppSelector((state) => state.auth);
  if (!loginData.accessToken) {
    return <Navigate to={"/login"} />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
