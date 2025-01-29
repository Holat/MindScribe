import headerLogo from "../../assets/bulgatti.png";
import BackArrow from "../../components/BackArrow";
import { BiSearch } from "react-icons/bi";
import HomeIcons from "../../components/HomeIcons";
import { useState } from "react";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <BackArrow />
        </div>
        <div>
          <img src={headerLogo} alt="Logo" className="w-20 mr-5" />
        </div>
      </div>

      {/* search input. */}
      <div className="ml-5 mt-3 flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
        <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
          <BiSearch size={14} className="text-black" />
        </div>

        <input
          type="text"
          placeholder="Search by title.."
          className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* home icons. */}
      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
