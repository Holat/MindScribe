import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import HomeIcons from "../../components/HomeIcons";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchArchivedNotes } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import NoteCard from "../../components/NoteCard";
import HomeHeader from "../../components/HomeHeader";

export default function Archive() {
  const { user } = useAuth();
  const [archived, setArchived] = useState([]);

  useEffect(() => {
    if (!user.id) return;
    toast.promise(
      async () => {
        const data = await fetchArchivedNotes(user?.id);
        setArchived(data);
      },
      {
        loading: "Loading",
        success: "",
        error: "Error when fetching",
      }
    );
  }, [user?.id]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center lg:hidden">
        <div className="">
          <BackArrow />
        </div>
        <div>
          <img src={headerLogo} alt="Logo" className="w-20 mr-5" />
        </div>
      </div>
      <div className="hidden lg:grid">
        <HomeHeader />
      </div>

      <div className="px-5 lg:px-10 text-[17px] font-bold mt-4 mb-4 text-blue-700 lg:mt-6">
        Archived Notes
      </div>

      <div className="px-4 lg:px-10 flex flex-col gap-8 pb-24 lg:grid lg:grid-rows-4 lg:gap-4 lg:pb-10 grid-cols-4">
        {archived?.map(({ id, title, tags, updated_at }) => (
          <NoteCard
            key={id}
            title={title}
            tags={tags}
            id={id}
            date={updated_at}
          />
        ))}
      </div>

      {/* home icons. */}
      <div className="lg:hidden">
        <HomeIcons />
      </div>
    </div>
  );
}
