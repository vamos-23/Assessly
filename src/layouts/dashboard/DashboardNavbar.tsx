import { useNavigate } from "react-router-dom";
import { clearToken } from "../../utils/auth";

export default function DashboardNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <div
      className="h-17.5 flex items-center justify-between px-6 
                    border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md"
    >
      <h1 className="text-xl font-semibold text-white tracking-wide">
        Assessly
      </h1>

      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm rounded-lg 
                   bg-white/10 hover:bg-white/20 
                   transition text-white"
      >
        Logout
      </button>
    </div>
  );
}
