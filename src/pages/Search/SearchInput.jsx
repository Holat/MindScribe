import headerLogo from "../../assets/bulgatti.png";
import BackArrow from "../../components/BackArrow";
import { BiSearch } from "react-icons/bi";
import HomeIcons from "../../components/HomeIcons";
import { useState, useCallback, useEffect } from "react";
import { useNote } from "../../context/NoteContext";
import NoteCard from "../../components/NoteCard";
import HomeHeader from "../../components/HomeHeader";

export default function SearchInput() {
  const { notes } = useNote();
  const [searchInput, setSearchInput] = useState("");
  const [searchedNotes, setSearchNotes] = useState([]);

  const filterNotes = useCallback(() => {
    if (!searchInput.trim()) {
      setSearchNotes(notes);
      return;
    }
    const selected = notes
      ?.filter((note) =>
        note.title.toLowerCase().includes(searchInput.toLowerCase())
      )
      .sort((a, b) => {
        const aIndex = a.title.toLowerCase().indexOf(searchInput.toLowerCase());
        const bIndex = b.title.toLowerCase().indexOf(searchInput.toLowerCase());

        // Prioritize titles that start with the search query
        if (aIndex !== bIndex) return aIndex - bIndex;

        // If both have the same index, sort alphabetically
        return a.title.localeCompare(b.title);
      });

    setSearchNotes(selected);
  }, [notes, searchInput]);

  useEffect(() => {
    filterNotes();
  }, [filterNotes]);

  return (
    <div>
      <div className="lg:hidden flex flex-row justify-between items-center">
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

      {/* search input. */}
      <div className="ml-5 mt-3 lg:mt-7 flex items-center border border-white rounded-full bg-slate-50 p-2 w-80 focus-within:border-blue-700 focus-within:border-2">
        <div className="flex items-center justify-center bg-white rounded-full h-8 w-8 mr-3">
          <BiSearch size={14} className="text-black" />
        </div>

        <input
          type="text"
          placeholder="Search by title.."
          className="flex-1 font-serif placeholder:text-black placeholder:opacity-40 placeholder:font-sans bg-slate-50 outline-none text-[15px]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="px-4 flex flex-col gap-8 pb-24 mt-5 lg:grid lg:grid-rows-4 lg:gap-4 lg:pb-10 grid-cols-4">
        {searchedNotes?.map(({ id, title, tags, updated_at }) => (
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
