import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";
import headerLogo from "../../assets/bulgatti.png";
import { Link } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
import AnimatedLoader from "../../assets/loading.svg";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const { signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error handling.
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (email === "" || password === "") setError("This field cannot be empty");
    else setError("");
    await signIn(email, password);
  }

  return (
    <div className="text-center items-center flex-col flex">
      <div>
        <img src={headerLogo} alt="" className="w-64 py-8" />
      </div>
      <div className="">
        {/* <div className="font-serif font-bold text-2xl">Welcome back!</div> */}
        <div className="-mt-4">
          Log in to your <strong className="text-blue-700">MindScribe</strong>{" "}
          account.
        </div>
      </div>
      <div className="flex flex-col mt-12 gap-6 items-center">
        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 mb-0.5">
            <FiMail size={14} className="" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="font-serif border border-white rounded-full p-2 w-full placeholder:text-black placeholder:opacity-40 placeholder:font-sans pl-10 pr-10 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 text-[15px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email === "" && error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <IoWarning size={16} className="text-red-500" />
            </div>
          )}
        </div>

        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <GiPadlock size={14} className="" />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="font-serif border border-white rounded-full p-2 w-full placeholder:text-black placeholder:opacity-40 placeholder:font-sans pl-10 pr-10 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 text-[15px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password === "" && error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <IoWarning size={16} className="text-red-500" />
            </div>
          )}
        </div>

        <div className="text-end mr-6 -mt-3 opacity-50 cursor-pointer">
          Forgot Password?
        </div>
        <div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="cursor-pointer hover:opacity-70 duration-300 border border-transparent bg-blue-700 text-white p-3 rounded-full px-14 shadow-2xl font-sans tracking-widest"
          >
            {loading ? (
              <img src={AnimatedLoader} alt="" className="w-4" />
            ) : (
              "Log In"
            )}
          </button>
        </div>
        <div className="mt-3">
          <div className="">
            {"Don't have an account?"}
            <Link to="/signup">
              <strong className="text-blue-700 cursor-pointer"> Sign Up</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
