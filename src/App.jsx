import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/Home/OnBoarding";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import CreateNote from "./pages/Home/CreateNote";
import SearchInput from "./pages/Search/SearchInput";
import Settings from "./pages/Settings";
import Archive from "./pages/Archive/Archive";
import ReadMore from "./pages/Home/ReadMore";
import ArchiveReadMore from "./pages/Archive/ArchiveReadMore";
import Tags from "./pages/Tag/Tags";
import { NoteProvider } from "./context/NoteContext";
import EditNote from "./pages/Home/EditNote";
import ResetP from "./pages/Auth/ResetP";
import ListOfNames from "./components/ListOfNames";

function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <BrowserRouter>
          <AuthProvider>
            <NoteProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetP />} />
                <Route path="/home" element={<OnBoarding />} />
                <Route path="/create-note" element={<CreateNote />} />
                <Route path="/search" element={<SearchInput />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/read-more/:id" element={<ReadMore />} />
                <Route path="/edit-note/:id" element={<EditNote />} />
                <Route
                  path="/archive-read-more"
                  element={<ArchiveReadMore />}
                />
                <Route path="/tags" element={<Tags />} />
              </Routes>
            </NoteProvider>
            <Toaster />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
