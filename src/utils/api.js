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
    .eq("isArchived", false)
    .order("updated_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const fetchNoteById = async (id) => {
  if (!id) return null;
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const toggleArchiveNote = async (noteId, isArchived) => {
  const { error } = await supabase
    .from("notes")
    .update({ isArchived: !isArchived }) // Toggle archive status
    .eq("id", noteId);

  if (error) throw error;
  return true;
};

export const fetchArchivedNotes = async (id) => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", id)
    .eq("isArchived", true) // Get only archived notes
    .order("created_at", { ascending: false }); // Optional: Sort by newest first

  if (error) throw error;
  return data;
};

export const createNote = async ({ user_id, title, html, tags, delta }) => {
  if (!tags) return;
  const { data, error } = await supabase
    .from("notes")
    .insert([
      { user_id, title, body: html, tags, note_delta: JSON.stringify(delta) },
    ])
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
export const updateNote = async ({
  user_id,
  title,
  html,
  tags,
  delta,
  note_id,
}) => {
  if (!tags) return;
  const { data, error } = await supabase
    .from("notes")
    .update({
      user_id,
      title,
      body: html,
      tags,
      note_delta: JSON.stringify(delta),
    })
    .eq("id", note_id);

  if (error) {
    toast.error("Error updating note");
    throw error;
  }

  toast.success("Note updated successfully");
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
