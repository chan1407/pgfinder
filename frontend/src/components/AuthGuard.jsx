import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthGuard;
