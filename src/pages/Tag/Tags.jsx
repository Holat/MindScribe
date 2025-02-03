import { useState, useCallback, useEffect } from "react";
import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import HomeIcons from "../../components/HomeIcons";
import TagSelect from "../../components/TagSelect";
import NoteCard from "../../components/noteCard";
import { useNote } from "../../../context/NoteContext";
import HomeHeader from "../../components/HomeHeader";

export default function Tags() {
  const { notes } = useNote();
  const [tag, setTag] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const handleTagChange = (selectedOptions) => setTag(selectedOptions);

  const filterNotes = useCallback(() => {
    if (tag?.length < 1) {
      setSelectedNotes(notes);
      return;
    }
    const selected = notes?.filter((note) =>
      note.tags.some((t) => tag?.includes(t))
    );

    setSelectedNotes(selected);
  }, [notes, tag]);

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

      {/* tags dropdown. */}
      <div className="px-4 lg:mt-10 mt-4">
        <TagSelect handleSelect={handleTagChange} />
      </div>
      <div className="px-4 flex flex-col gap-8 pb-24 mt-5 lg:grid lg:grid-rows-4 lg:gap-4 lg:pb-10 grid-cols-4">
        {selectedNotes?.map(({ id, title, tags, updated_at }) => (
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
