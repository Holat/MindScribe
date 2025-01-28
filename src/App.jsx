import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/Home/OnBoarding";

function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<OnBoarding />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
