// src/components/auth/LogoutHandler.jsx
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  return logout;
};

export default useLogout;
