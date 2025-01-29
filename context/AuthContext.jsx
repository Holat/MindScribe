import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../src/utils/supabaseClient";
import { setItem, removeItem } from "../src/utils/storage";
import toast from "react-hot-toast";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser)); // ✅ Retrieve stored user
  }, []);

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      const meta_data = { id: user.id, ...user.user_metadata };
      setItem("user", meta_data);
      setUser(meta_data);
      toast.success("Login Successful");
      navigate("/home");
    } catch (error) {
      toast.error(error.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async ({ email, password, fullName, phone }) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            fullName,
            phone,
          },
        },
      });

      if (error) throw error;

      toast.success("Sign-up successful");
      navigate("/"); // Navigate to the next page on success
    } catch (error) {
      // Handle the error
      toast.error(error.message || "Error  Signing up");
    } finally {
      setLoading(false); // Ensure loading is turned off after the operation
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      removeItem("user"); // ✅ Remove from localStorage
      setUser(null); // ✅ Clear context state
      toast.success("Signed Out");
      navigate("/");
    } catch {
      toast.error("Sign-out error");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, loading, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
