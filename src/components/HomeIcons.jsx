import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { CgTag } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

export default function HomeIcons() {
  return (
    <div className="fixed bottom-0 py-5 w-full mt-10 border border-slate-100 bg-slate-100 p-4 border-t-gray-400 shadow-[0_-4px_8px_rgba(0,0,0,0.1)] z-50">
      <div className="flex flex-row justify-between px-4 items-center">
        <div>
          <BiHome size={22} className="cursor-pointer" />
        </div>
        <div>
          <BiSearch size={22} className="cursor-pointer" />
        </div>
        <div>
          <BsArchive size={18} className="cursor-pointer" />
        </div>
        <div>
          <CgTag size={22} className="cursor-pointer" />
        </div>
        <div>
          <CiSettings size={22} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
