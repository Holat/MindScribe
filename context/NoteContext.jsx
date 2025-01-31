import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import { fetchAllNotes } from "../src/utils/api";
import { useAuth } from "./AuthContext";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function NoteProvider({ children }) {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);

  const fetchNote = useCallback(() => {
    toast.promise(
      async () => {
        const data = await fetchAllNotes(user?.id);
        setNotes(data);
      },
      {
        loading: "Loading",
        success: "",
        error: "Error when fetching",
      }
    );
  }, [user?.id]);
  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  return (
    <AuthContext.Provider value={{ notes, fetchNote }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useNote = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
