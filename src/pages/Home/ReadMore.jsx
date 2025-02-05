import { useEffect } from "react";
import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import { CgTag } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";
import HomeIcons from "../../components/HomeIcons";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchNoteById, deleteNote, toggleArchiveNote } from "../../utils/api";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNote } from "../../../context/NoteContext";
import { BiEdit } from "react-icons/bi";

export default function ReadMore() {
  const [note, setNote] = useState(null);
  const { fetchNote } = useNote();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    toast.promise(
      async () => {
        const success = await deleteNote(id);
        setLoading(false);
        fetchNote(true);
        success && navigate("/home");
      },
      {
        loading: "Loading",
        success: "Note Deleted",
        error: "Error when fetching",
      }
    );
  };

  const handleArchive = async () => {
    setLoading(true);
    toast.promise(
      async () => {
        const success = await toggleArchiveNote(id, note?.isArchived);
        setLoading(false);
        success && navigate("/archive");
      },
      {
        loading: "Loading",
        success: note.isArchived ? "Note Unarchived" : "Note Archived",
        error: "Error Archiving",
      }
    );
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      toast.promise(
        async () => {
          const data = await fetchNoteById(id);
          setNote(data);
          setLoading(false);
        },
        {
          loading: "Loading",
          success: "",
          error: "Error when fetching",
        }
      );
    })();
  }, [id]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <BackArrow />
        </div>
        <div>
          <img src={headerLogo} alt="Logo" className="w-20 mr-5" />
        </div>
      </div>

      <div className="px-5 mt-2">
        {/* title with delete and archive icons. */}
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col">
          <div className="font-bold text-[20px] font-sans tracking-wider">
            {note?.title}
          </div>
          <div className="flex flex-row items-center lg:gap-6 gap-4 lg:mt-0 mt-2 mr-2">
            <button type="button" onClick={handleDelete} disabled={loading}>
              <FaTrash size={15} className="text-red-500 cursor-pointer" />
            </button>
            <button onClick={handleArchive} disabled={loading}>
              <BsArchive size={15} className="text-blue-700 cursor-pointer" />
            </button>
            <Link to={`/edit-note/${id}`}>
              <BiEdit size={15} className="text-green-500 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* tags. */}
        <div className="opacity-70 flex flex-row gap-10 items-center">
          <div className="flex flex-row gap-2 items-center py-4">
            <div>
              <CgTag size={17} />
            </div>
            <div>Tags</div>
          </div>
          <div>{note?.tags.join(", ")}</div>
        </div>
        <hr className="opacity-20" />

        {/* dummy details. */}
        <div className="py-4 pb-44">
          <div dangerouslySetInnerHTML={{ __html: note?.body }} />
        </div>
      </div>
      {/* home icons. */}
      <div className="lg:hidden">
        <HomeIcons />
      </div>
    </div>
  );
}

{
  /* <div>Key Performance optimization techniques:</div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 mt-4">
              <div>1. Code Styling</div>
              <div>{"- Use React.lazy() for route based splitting."}</div>
              <div>{"- Implement dynamic imports for heavy components"}</div>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <div>2. Code Styling</div>
              <div>{"- Use React.lazy() for route based splitting."}</div>
              <div>{"- Implement dynamic imports for heavy components"}</div>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <div>3. Code Styling</div>
              <div>{"- Use React.lazy() for route based splitting."}</div>
              <div>{"- Implement dynamic imports for heavy components"}</div>
            </div>
          </div> */
}
