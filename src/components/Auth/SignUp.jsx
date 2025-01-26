import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import { FiMail } from "react-icons/fi";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="text-center flex flex-col">
      <div className="text-start ml-5 py-6 cursor-pointer">
        <BiArrowBack size={17} />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="font-serif font-bold text-2xl">Let's Get Started!</div>
        <div className="opacity-30">
          Create an account on{" "}
          <strong className="text-blue-700">MindScribe </strong>to get all
          features.
        </div>
      </div>
      <div>
        <form className="flex flex-col mt-7 gap-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="font-serif border border-white rounded-full p-2 w-80 placeholder:text-black placeholder:opacity-40 placeholder:font-sans px-14 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 focus:font-bold text-[15px]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <div className="-mt-8 mb-4 ml-12">
              <FaUser size={14} />
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="font-serif border border-white rounded-full p-2 w-80 placeholder:text-black placeholder:opacity-40 placeholder:font-sans px-14 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 focus:font-bold text-[15px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="-mt-8 mb-4 ml-12">
              <FiMail size={14} />
            </div>
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone"
              className="font-serif border border-white rounded-full p-2 w-80 placeholder:text-black placeholder:opacity-40 placeholder:font-sans px-14 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 focus:font-bold text-[15px]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="-mt-8 mb-4 ml-12">
              <FaPhone size={14} />
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
            <div className="-mt-8 mb-4 ml-12">
              <GiPadlock size={14} />
            </div>
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="font-serif border border-white rounded-full p-2 w-80 placeholder:text-black placeholder:opacity-40 placeholder:font-sans px-14 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 focus:font-bold text-[15px]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="-mt-8 mb-4 ml-12">
              <GiPadlockOpen size={14} />
            </div>
          </div>
          <div className="mt-2">
            <button className="cursor-pointer hover:opacity-70 duration-300 border border-transparent bg-blue-700 text-white p-3 rounded-full px-14 shadow-2xl font-sans tracking-widest">
              SIGN UP
            </button>
          </div>
        </form>
        <div className="mt-7">
          <div className="">
            Already have an account?{" "}
            <strong className="text-blue-700 cursor-pointer">Login here</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
