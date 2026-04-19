import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

type ProtectedRouteProps = {
  children: React.JSX.Element;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = getToken();
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}
