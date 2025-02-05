import HomeHeader from "../../components/HomeHeader";
import HomeIcons from "../../components/HomeIcons";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoteCard from "../../components/NoteCard";
import { useNote } from "../../../context/NoteContext";
import Welcome from "../../components/Welcome";
import { useAuth } from "../../../context/AuthContext";

export default function OnBoarding() {
  const { notes } = useNote();
  const { user } = useAuth();
  const noteA = notes && notes.length > 0;

  return (
    <div className="lg:h-dvh lg:flex lg:flex-col relative">
      <div className="lg:hidden">
        <Welcome />
      </div>
      <div>
        <HomeHeader />
      </div>

      {/* desktop view. */}
      <div
        className={`hidden lg:flex lg:flex-row lg:justify-between   lg:px-20 lg:h-full lg:items-center ${
          !noteA && "lg:justify-center"
        }`}
      >
        <div
          className={`hidden lg:flex lg:flex-col lg:gap-2 lg:justify-center ${
            !noteA && "lg:items-center"
          }`}
        >
          <div className="flex flex-row items-center gap-0">
            <div
              className="text-6xl"
              style={{
                fontFamily: "cursive",
              }}
            >
              Welcome,{" "}
              <div
                className={`text-blue-700 font-bold ${!noteA && "text-center"}`}
              >{`${user?.fullName.split(" ")[0] || "User"}`}</div>
            </div>
          </div>
          <div className="opacity-50 italic">
            Scribe down your dream, until brought to reality...
          </div>
          <Link
            to="/create-note"
            className="cursor-pointer hover:opacity-70 px-8 duration-300 border border-transparent bg-blue-700 text-white p-3 rounded-full shadow-2xl w-fit font-sans tracking-widest mt-10"
          >
            Create Note
          </Link>
        </div>

        {noteA && (
          <div className="w-[50%]">
            <div className="text-[17px] text-blue-700 font-bold mb-4 lg:mt-4">
              Recent Notes
            </div>
            <div className="grid grid-rows-2 gap-6 pb-10 grid-cols-2">
              {notes?.slice(0, 5).map(({ id, title, tags, updated_at }) => (
                <NoteCard
                  key={id}
                  title={title}
                  tags={tags}
                  id={id}
                  date={updated_at}
                />
              ))}
              <Link
                to="/search"
                className="flex text-blue-400 hover:text-blue-700 font-bold hover:border-blue-700 duration-300 hover:duration-300 bg-transparent rounded-xl p-4 cursor-pointer items-center justify-center border border-gray-300 border-dashed"
              >
                See All
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* mobile view. */}
      <div className="lg:hidden px-4 flex flex-col gap-8 pb-24">
        {notes?.slice(0, 5).map(({ id, title, tags, updated_at }) => (
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
      <Link className="lg:hidden" to="/create-note">
        <div className="border border-transparent p-6 rounded-full bg-blue-700 text-white cursor-pointer right-0 bottom-[90px] mr-3 fixed hover:opacity-70 duration-300">
          <FaPlus className="" />
        </div>
      </Link>

      {/* home icons */}
      <div className="lg:hidden">
        <HomeIcons />
      </div>
    </div>
  );
}
