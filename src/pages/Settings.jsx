import BackArrow from "../components/BackArrow";
import headerLogo from "../assets/bulgatti.png";
import { FaPhone, FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import AnimatedLoader from "../assets/loading.svg";
import { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import HomeIcons from "../components/HomeIcons";

export default function Settings() {
  const { signOut, user } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLogOut() {
    setLoading(true);
    await signOut();
  }

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

      <div className="flex flex-col mt-7 gap-6 items-center">
        <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
          {/* fullname. */}
          <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
            <FaUser size={14} className="text-black" />
          </div>
          <input
            type="text"
            placeholder={`${user?.fullName.split(" ")[0] || "User"}`}
            className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
            readOnly
          />
        </div>

        {/* email */}
        <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
          <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
            <FiMail size={14} className="text-black" />
          </div>
          <input
            type="email"
            placeholder={`${user?.email || "user@gmail.com"}`}
            className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
            readOnly
          />
        </div>

        {/* phone */}
        <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
          <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
            <FaPhone size={14} className="text-black" />
          </div>
          <input
            type="number"
            placeholder={`${user?.phone || "00000000000"}`}
            className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
            readOnly
          />
        </div>

        {/* password */}
        <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
          <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
            <GiPadlock size={14} className="text-black" />
          </div>
          <input
            type="password"
            placeholder={`${user?.password || "*******"}`}
            className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
            readOnly
          />
        </div>

        {/* sign out button. */}
        <div>
          <button
            disabled={loading}
            onClick={handleLogOut}
            className="cursor-pointer hover:opacity-70 duration-300 border border-transparent bg-red-500 text-white p-3 rounded-full px-14 shadow-2xl font-sans tracking-widest mt-2"
          >
            {loading ? (
              <img src={AnimatedLoader} alt="" className="w-4" />
            ) : (
              "Log Out"
            )}
          </button>
        </div>
      </div>

      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
