import HomeIcons from "./HomeIcons";
import headerLogo from "../../assets/bulgatti.png";
import { FaPlus } from "react-icons/fa";

export default function OnBoarding() {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center py-4 px-4 mb-4">
        <div className="">
          <img src={headerLogo} alt="" className="w-30" />
        </div>
        <div>Hello, User</div>
      </div>
      <div className="px-4 flex flex-col gap-8 pb-24">
        <div className="flex flex-col gap-6 px-4 border border-white hover:border-blue-700 duration-300 hover:duration-300 bg-white rounded-md p-4 cursor-pointer shadow-sm">
          <div className="font-bold text-[18px] font-sans tracking-wider">
            React Performance Optimization
          </div>
          <div className="flex flex-row gap-2">
            <div className="cursor-pointer border border-white bg-slate-100 p-1 px-4 rounded-sm">
              Dev
            </div>
            <div className="cursor-pointer border border-white bg-slate-100 p-1 px-4 rounded-sm">
              React
            </div>
          </div>
          <div className="text-[15px] flex flex-row justify-between">
            <div className="">October 29, 2024</div>
            <div className="">10 : 30 AM</div>
          </div>
        </div>
      </div>

      {/* create new post button */}
      <div className="border border-transparent p-6 rounded-full bg-blue-700 text-white cursor-pointer right-0 top-[550px] mr-3 fixed hover:opacity-70 duration-300">
        <FaPlus className="" />
      </div>

      {/* home icons */}
      <div className="fixed bottom-0 py-5 w-full mt-10 border border-slate-100 bg-slate-100 p-4 border-t-gray-400 shadow-[0_-4px_8px_rgba(0,0,0,0.1)] z-50">
        <HomeIcons />
      </div>
    </div>
  );
}
