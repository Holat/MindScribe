import { useEffect, useState } from "react";
import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import ReactQuill from "react-quill";
import AnimatedLoader from "../../assets/loading.svg";
import toast from "react-hot-toast";
import { createNote, fetchTags } from "../../utils/api";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function CreateNote() {
  //note params.
  const { user } = useAuth();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([]);
  const [tag, setTag] = useState([]);

  //error handling.
  const [errors, setErros] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleTagChange = (selectedOptions) => {
    setTag(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  async function handleSubmit() {
    setLoading(true);
    if (body === "") toast.error("Body cannot be empty");
    else if (title === "") toast.error("Title cannot be empty");
    else if (tag === "") toast.error("Tag cannot be empty");
    else {
      setErros("");

      await createNote({ user_id: user?.id, body, title, tags: tag });
      navigate("/home");
    }
    setLoading(false);
  }

  const fetch = async () => {
    const data = await fetchTags();
    const mapOp = data.map((tag) => ({ value: tag.name, label: tag.name }));
    setOptions(mapOp);
  };

  useEffect(() => {
    fetch();
  }, []);

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

      <div className="px-5 text-[17px] font-bold mt-2">Create Note</div>

      <div className="flex flex-col gap-5 px-5 mt-2">
        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Title"
            className={
              errors
                ? "flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-white border border-red-500 rounded-lg outline-none text-[15px] p-2 focus-within:border-blue-700 focus-within:border-2"
                : "flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-white border border-white rounded-lg outline-none text-[15px] p-2 focus-within:border-blue-700 focus-within:border-2"
            }
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Tag Input */}
        <div className="flex flex-col gap-2">
          <Select
            options={options}
            isMulti
            value={options.filter((stag) => tag.includes(stag.value))}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#1447e6" : "transparent",
                borderRadius: "8px",
              }),
            }}
            onChange={handleTagChange}
          />
        </div>

        {/* Quill Editor for Body */}
        <div className="flex flex-col gap-2">
          <ReactQuill
            value={body}
            onChange={setBody}
            theme="snow"
            placeholder="Write your note here..."
            className={`custom-quill bg-white rounded-lg ${
              errors ? "border border-red-500" : ""
            }`}
            style={{
              minHeight: "200px",
              padding: "15px",
            }}
          />
        </div>

        <div className="text-center">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="cursor-pointer hover:opacity-70 px-14 duration-300 border border-transparent bg-blue-700 text-white p-3 rounded-full shadow-2xl font-sans tracking-widest mt-2"
          >
            {loading ? (
              <img src={AnimatedLoader} alt="" className="w-4" />
            ) : (
              "Create Note"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
