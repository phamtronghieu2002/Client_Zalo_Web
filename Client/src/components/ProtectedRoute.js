import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/Auth/AuthProvider";
export default function ProtectedRoute({ redirectPath = "/login", children }) {
  const { getUser, loading } = useContext(AuthContext);
  if (!getUser().auth) {
    return loading ? <></> : <Navigate to={redirectPath} replace />;
  }

  return children;
}
