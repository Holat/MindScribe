import HomeHeader from "../../components/HomeHeader";
import HomeIcons from "../../components/HomeIcons";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoteCard from "../../components/noteCard";
import { useNote } from "../../../context/NoteContext";

export default function OnBoarding() {
  const { notes } = useNote();

  return (
    <div className="">
      <div>
        <HomeHeader />
      </div>
      <div className="px-4 flex flex-col gap-8 pb-24">
        {notes?.map(({ id, title, tags, updated_at }) => (
          <NoteCard
            key={id}
            title={title}
            tags={tags}
            id={id}
            date={updated_at}
          />
        ))}
      </div>

      {/* create new post button */}
      <Link to="/create-note">
        <div className="border border-transparent p-6 rounded-full bg-blue-700 text-white cursor-pointer right-0 top-[550px] mr-3 fixed hover:opacity-70 duration-300">
          <FaPlus className="" />
        </div>
      </Link>

      {/* home icons */}
      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
