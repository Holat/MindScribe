import { supabase } from "./supabaseClient";
import toast from "react-hot-toast";

export const fetchTags = async () => {
  const { data, error } = await supabase.from("tags").select("name");

  if (error) {
    toast.error("Error fetching tags");
    return null;
  }
  return data;
};

export const fetchAllNotes = async (user_id) => {
  if (!user_id) return null;
  const { data, error } = await supabase
    .from("notes")
    .select("id, title, tags, updated_at")
    .eq("user_id", user_id)
    .order("updated_at");

  if (error) {
    toast.error("Error fetching note");
    return null;
  }
  return data;
};

export const fetchNote = async (id) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
};

export const createNote = async ({ user_id, title, body, tags }) => {
  //   if (!user_id) return;

  console.log(typeof tags, tags);
  if (!tags) return;
  const { data, error } = await supabase
    .from("notes")
    .insert([{ user_id, title, body, tags }])
    .select()
    .single();

  if (error) {
    toast.error("Error creating note");
    return null;
  }

  toast.success("Note create successfully");
  return data;
};

/**
 * Updates an existing note in the database.
 * @param id - The ID of the note to update.
 * @param title - The new title of the note (optional).
 * @param content - The new HTML content of the note (optional).
 * @param tags - The new array of tags (optional).
 * @returns The updated note or `null` if an error occurs.
 */
export const updateNote = async (id, title, content, tags) => {
  const updates = { title, content, tags };

  const { data, error } = await supabase
    .from("notes")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return null;
  }
  return data;
};

/**
 * Deletes a note from the database.
 * @param id - The ID of the note to delete.
 * @returns `true` if successful, `false` otherwise.
 */
export const deleteNote = async (id) => {
  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    toast.error("Error deleting note");
    return false;
  }
  return true;
};
