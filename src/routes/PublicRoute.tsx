import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

type PublicRouteProps = {
  children: React.JSX.Element;
};

export default function PublicRoute({ children }: PublicRouteProps) {
  const token = getToken();
  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return children;
}
