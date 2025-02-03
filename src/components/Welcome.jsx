import note from "../assets/not.avif";
import headerLogo from "../assets/bulgatti.png";

export default function Welcome() {
  return (
    <div>
      <div className="text-center">
        <div className="">
          <img src={note} alt="" className="" />
        </div>
        <div className="absolute top-25 ml-10">
          {/* <div
            className="text-2xl font-bold text-white"
            style={{
              fontFamily: "lucida sans",
            }}
          >
            Welcome to
          </div> */}
          <img src={headerLogo} alt="" className="w-32 invert " />
        </div>
        {/* <div
          className="text-[22px] font-bold"
          style={{
            fontFamily: "lucida sans",
          }}
        >
          Welcome to MindScribe
        </div>
        <div className="opacity-50 italic">
          Scribe down your dream, until brought to reality...
        </div> */}
      </div>
    </div>
  );
}
