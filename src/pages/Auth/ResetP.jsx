import { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import headerLogo from "../../assets/bulgatti.png";
import { IoWarning } from "react-icons/io5";
import AnimatedLoader from "../../assets/loading.svg";
import { useAuth } from "../../context/AuthContext";

export default function ResetP() {
  const { resetPass } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState();

  //error handling.
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    if (password !== confirmPass) setError("This field cannot be empty");
    else setError("");
    await resetPass(password);
    setLoading(false);
  }

  return (
    <div className="text-center items-center flex-col flex justify-center h-dvh">
      <div>
        <img src={headerLogo} alt="" className="w-64 py-8" />
      </div>
      <div className="">
        {/* <div className="font-serif font-bold text-2xl">Welcome back!</div> */}
        <div className="-mt-4">
          Change your <strong className="text-blue-700">MindScribe</strong>{" "}
          Password.
        </div>
      </div>
      <div className="flex flex-col mt-12 gap-6 items-center">
        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 mb-0.5">
            <GiPadlock size={14} className="" />
          </div>
          <input
            type="Password"
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

        <div className="relative w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <GiPadlock size={14} className="" />
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="font-serif border border-white rounded-full p-2 w-full placeholder:text-black placeholder:opacity-40 placeholder:font-sans pl-10 pr-10 py-3 bg-slate-50 focus:outline-none focus:border-blue-700 focus:border-2 text-[15px]"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          {confirmPass === "" && error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <IoWarning size={16} className="text-red-500" />
            </div>
          )}
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
              "Reset Password"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
