import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import { fetchAllNotes } from "../utils/api";
import { useAuth } from "./AuthContext";
import { useLocation } from "react-router-dom";

const NoteContext = createContext();

// eslint-disable-next-line react/prop-types
export function NoteProvider({ children }) {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const location = useLocation();

  const path = location.pathname === "/" || location.pathname === "/signup";

  const fetchNote = useCallback(
    (r = false) => {
      if (!user?.id) return;
      toast.promise(
        async () => {
          const data = await fetchAllNotes(user?.id);
          setNotes(data);
        },
        {
          loading: "Loading",
          success: "Note fetched",
          error: "Error when fetching",
        },
        {
          style: {
            display: r && "none",
          },
        }
      );
    },
    [user?.id]
  );

  useEffect(() => {
    !path && fetchNote();
  }, [fetchNote, path]);

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
