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

const NoteContext = createContext();

// eslint-disable-next-line react/prop-types
export function NoteProvider({ children }) {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);

  const fetchNote = useCallback(
    (r = false) => {
      toast.promise(
        async () => {
          const data = await fetchAllNotes(user?.id);
          setNotes(data);
        },
        {
          loading: r ? "" : "Loading",
          success: "",
          error: "Error when fetching",
        }
      );
    },
    [user?.id]
  );
  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  return (
    <NoteContext.Provider value={{ notes, fetchNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export const useNote = () => {
  const context = useContext(NoteContext);
  return context;
};
