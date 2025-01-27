import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";
import headerLogo from "../../assets/bulgatti.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-center">
      <div>
        <img src={headerLogo} alt="" className="w-64 ml-14 py-8" />
      </div>
      <div className="">
        {/* <div className="font-serif font-bold text-2xl">Welcome back!</div> */}
        <div className="-mt-4">
          Log in to your <strong className="text-blue-700">MindScribe</strong>{" "}
          account.
        </div>
      </div>
      <form className="flex flex-col mt-12 gap-6">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="font-serif border border-white rounded-full p-2 w-80 placeholder:text-black placeholder:opacity-40 placeholder:font-sans px-14 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 focus:font-bold text-[15px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="-mt-8 mb-4 ml-12 lg:ml-[34em]">
            <FiMail size={14} />
          </div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="font-serif border border-white rounded-full p-2 w-80 placeholder:text-black placeholder:opacity-40 placeholder:font-sans px-14 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 focus:font-bold text-[15px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="-mt-8 mb-4 ml-12 lg:ml-[34em]">
            <GiPadlock size={14} />
          </div>
        </div>
        <div className="text-end mr-6 -mt-3 opacity-50 cursor-pointer">
          Forgot Password?
        </div>
        <div className="mt-6">
          <button className="cursor-pointer hover:opacity-70 duration-300 border border-transparent bg-blue-700 text-white p-3 rounded-full px-14 shadow-2xl font-sans tracking-widest">
            LOG IN
          </button>
        </div>
        <div className="mt-3">
          <div className="">
            Don't have an account?{" "}
            <Link to="/signup">
              <strong className="text-blue-700 cursor-pointer">Sign Up</strong>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
