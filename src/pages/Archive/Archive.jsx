import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import HomeIcons from "../../components/HomeIcons";
import { Link } from "react-router-dom";

export default function Archive() {
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

      <div className="px-5 text-[17px] font-bold mt-4 mb-4">Archived Notes</div>

      <div className="px-4 flex flex-col gap-8 pb-24">
        <Link
          to="/archive-read-more"
          className="flex flex-col gap-6 px-4 border border-white hover:border-blue-700 duration-300 hover:duration-300 bg-white rounded-md p-4 cursor-pointer shadow-sm"
        >
          <div className="font-bold text-[18px] font-sans tracking-wider">
            Japan Travel Planning
          </div>
          <div className="flex flex-row gap-2">
            <div className="cursor-pointer border border-white bg-slate-100 p-1 px-4 rounded-sm">
              Travel
            </div>
            <div className="cursor-pointer border border-white bg-slate-100 p-1 px-4 rounded-sm">
              Personal
            </div>
          </div>
          <div className="text-[15px] flex flex-row justify-between">
            <div className="">October 28, 2028</div>
            <div className="">4 : 30 AM</div>
          </div>
        </Link>
      </div>

      {/* home icons. */}
      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
