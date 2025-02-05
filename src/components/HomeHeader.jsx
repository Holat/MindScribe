import { useAuth } from "../context/AuthContext";
import headerLogo from "../assets/bulgatti.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";

export default function HomeHeader() {
  const { signOut, user } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogOut() {
    setLoading(true);
    await signOut();
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center py-4 px-4 lg:px-10 mt-0 lg:border lg:border-slate-100 lg:bg-slate-100 lg:p-2 lg:border-t-gray-400 lg:shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
        <div className="hidden lg:flex">
          <img src={headerLogo} alt="" className="w-30" />
        </div>
        <div
          style={{
            fontFamily: "cursive",
          }}
          className="lg:hidden font-sans text-[22px] tracking-tight"
        >
          {`${user?.fullName.split(" ")[0] || "User"}`} Notes
        </div>
        <Link to="/search" className="text-blue-700 text-[15px] lg:hidden">
          See All
        </Link>
        <div className="hidden lg:flex lg:flex-row lg:gap-10 lg:items-center text-[15px]">
          <Link to="/home">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/archive">Archived</Link>
          <Link to="/tags">Tags</Link>
          <button
            disabled={loading}
            onClick={handleLogOut}
            className="text-red-500 p-2 cursor-pointer"
          >
            <BiLogOut size={18} />
          </button>
        </div>
      </div>
      <div className="hidden font-semibold font-sans text-[22px] tracking-tight">
        {`${user?.fullName.split(" ")[0] || "User"}`} Notes
      </div>
    </div>
  );
}
