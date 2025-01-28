import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { CgTag } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

export default function HomeIcons() {
  return (
    <div className="">
      <div className="flex flex-row justify-between px-4 items-center">
        <div className="">
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
