import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
import { supabase } from "../../utils/supabaseClient";
import AnimatedLoader from "../../assets/loading.svg";
import headerLogo from "../../assets/bulgatti.png";

export default function SignUp() {
  //form params.
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //navigate.
  const navigate = useNavigate();

  //error handling.
  // const [fullNameError, setFullNameErrors] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [phoneError, setPhoneError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errors, setErrors] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailValidity, setEmailValidity] = useState("");

  async function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (
      fullName === "" ||
      email === "" ||
      !isEmailValid ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrors("This field cannot be empty.");
      setEmailValidity("Invalid email address");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setErrors("");
      setConfirmPasswordError("");
      // setEmailValidity("");
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            fullName,
            phone,
          },
        },
      });

      if (error) {
        // Throwing the error so it can be caught and handled
        throw error;
      }

      console.log("Sign-up successful:", data);
      navigate("/"); // Navigate to the next page on success
    } catch (err) {
      // Handle the error
      console.error("An error occurred during sign-up:", err.message || err);
      setErrors(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Ensure loading is turned off after the operation
    }
  }

  return (
    <div className="text-center flex flex-col">
      <div className="flex items-center gap-3">
        <div
          onClick={() => navigate(-1)}
          className="text-start ml-5 py-6 cursor-pointer"
        >
          <BiArrowBack size={17} />
        </div>
        <div>
          <img src={headerLogo} alt="" className="w-20 mb-2" />
        </div>
      </div>
      <div className="flex flex-col gap-0.5 items-center">
        <div className="font-serif font-bold text-2xl">
          {"Let's Get Started!"}
        </div>
        <div className="opacity-100">
          Create an account on{" "}
          <strong className="text-blue-700">MindScribe </strong>
          to get all features.
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-7 gap-6 items-center">
          <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
            {/* Icon with styling */}
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
              <FaUser size={14} className="text-black" />
            </div>

            {/* Input field */}
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* Error icon */}
            {!fullName && errors && (
              <div className="flex items-center justify-center text-red-500 mr-2">
                <IoWarning />
              </div>
            )}
          </div>
          {/* Email Field */}
          <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
              <FiMail size={14} className="text-black" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {(!email || errors) && emailValidity && (
              <div className="flex items-center justify-center text-red-500 mr-2">
                <IoWarning />
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
              <FaPhone size={14} className="text-black" />
            </div>
            <input
              type="number"
              placeholder="Phone"
              className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {!phone && errors && (
              <div className="flex items-center justify-center text-red-500 mr-2">
                <IoWarning />
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
              <GiPadlock size={14} className="text-black" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!password && errors && (
              <div className="flex items-center justify-center text-red-500 mr-2">
                <IoWarning />
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
            <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
              <GiPadlockOpen size={14} className="text-black" />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {(!confirmPassword || confirmPasswordError) && (
              <div className="flex items-center justify-center text-red-500 mr-2">
                <IoWarning />
              </div>
            )}
          </div>

          <div className="">
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="cursor-pointer hover:opacity-70 duration-300 border border-transparent bg-blue-700 text-white p-3 rounded-full px-14 shadow-2xl font-sans tracking-widest mt-2"
            >
              {loading ? (
                <img src={AnimatedLoader} alt="" className="w-4" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </div>
        <div className="mt-7">
          <div className="">
            Already have an account?{" "}
            <Link to="/">
              <strong className="text-blue-700 cursor-pointer">
                Login here
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
