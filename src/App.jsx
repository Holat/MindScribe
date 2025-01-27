import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <SignUp /> */}
            {/* <Login /> */}
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
