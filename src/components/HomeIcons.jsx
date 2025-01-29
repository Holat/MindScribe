import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { CgTag } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

export default function HomeIcons() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 py-5 w-full mt-10 border border-slate-100 bg-slate-100 p-4 border-t-gray-400 shadow-[0_-4px_8px_rgba(0,0,0,0.1)] z-50">
      <div className="flex flex-row justify-between px-4 items-center">
        <Link to="/home">
          <BiHome
            size={22}
            className={`cursor-pointer ${
              location.pathname === "/home" ? "text-blue-700" : ""
            }`}
          />
        </Link>
        <Link to="/search">
          <BiSearch
            size={22}
            className={`cursor-pointer ${
              location.pathname === "/search" ? "text-blue-700" : ""
            }`}
          />
        </Link>
        <Link to="/archive">
          <BsArchive
            size={18}
            className={`cursor-pointer ${
              location.pathname === "/archive" ? "text-blue-700" : ""
            }`}
          />
        </Link>
        <Link to="/tags">
          <CgTag
            size={22}
            className={`cursor-pointer ${
              location.pathname === "/tags" ? "text-blue-700" : ""
            }`}
          />
        </Link>
        <Link to="/settings">
          <CiSettings
            size={22}
            className={`cursor-pointer ${
              location.pathname === "/settings" ? "text-blue-700" : ""
            }`}
          />
        </Link>
      </div>
    </div>
  );
}
