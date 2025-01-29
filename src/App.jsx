import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/Home/OnBoarding";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<OnBoarding />} />
            </Routes>
            <Toaster />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
