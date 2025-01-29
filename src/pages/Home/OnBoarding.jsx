import HomeHeader from "../../components/HomeHeader";
import HomeIcons from "../../components/HomeIcons";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function OnBoarding() {
  return (
    <div className="">
      <div>
        <HomeHeader />
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
      <Link to="/create-note">
        <div className="border border-transparent p-6 rounded-full bg-blue-700 text-white cursor-pointer right-0 top-[550px] mr-3 fixed hover:opacity-70 duration-300">
          <FaPlus className="" />
        </div>
      </Link>

      {/* home icons */}
      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
