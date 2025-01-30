import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/Home/OnBoarding";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import CreateNote from "./pages/Home/CreateNote";
import SearchInput from "./pages/Search/SearchInput";
import Settings from "./pages/Settings";
import Archive from "./pages/Archive/Archive";
import ReadMore from "./pages/Home/ReadMore";
import ArchiveReadMore from "./pages/Archive/ArchiveReadMore";
import Tags from "./pages/Tag/Tags";

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
              <Route path="/create-note" element={<CreateNote />} />
              <Route path="/search" element={<SearchInput />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/read-more/:id" element={<ReadMore />} />
              <Route path="/archive-read-more" element={<ArchiveReadMore />} />
              <Route path="/tags" element={<Tags />} />
            </Routes>
            <Toaster />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
