import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import HomeIcons from "../../components/HomeIcons";

export default function Tags() {
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

      {/* tags dropdown. */}
      <div className="px-4 mt-5">
        <select className="w-full border border-white focus:border-blue-700 outline-none bg-slate-50 p-4 rounded-2xl outline-transparent placeholder:tracking-wide">
          <option className="text-[13px]">Select tag</option>
          <option className="text-[13px]">Dev</option>
          <option className="text-[13px]">Personal</option>
          <option className="text-[13px]">React</option>
          <option className="text-[13px]">Travel</option>
        </select>
      </div>

      {/* home icons. */}
      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
