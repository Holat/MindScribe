import { Link } from "react-router-dom";
import { formatDateTime } from "../utils/timeformat";

// eslint-disable-next-line react/prop-types
const NoteCard = ({ id, title, tags, date }) => {
  const datetime = formatDateTime(date);

  return (
    <Link
      to={`/read-more/${id}`}
      className="flex flex-col gap-6 px-4 border border-white hover:border-blue-700 duration-300 hover:duration-300 bg-white rounded-md p-4 cursor-pointer shadow-sm"
    >
      <div className="font-bold text-[18px] font-sans tracking-wider">
        {title}
      </div>
      <div className="flex flex-row gap-2">
        {tags?.map((tag) => (
          <div
            key={tag}
            className="cursor-pointer border border-white bg-slate-100 p-1 px-4 rounded-sm"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="text-[15px] flex flex-row justify-between">
        <div className="">{datetime.formattedDate}</div>
        <div className="">{datetime.formattedTime}</div>
      </div>
    </Link>
  );
};

export default NoteCard;
