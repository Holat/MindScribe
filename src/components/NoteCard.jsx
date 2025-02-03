import { Link } from "react-router-dom";
import { formatDateTime } from "../utils/timeformat";

// eslint-disable-next-line react/prop-types
const NoteCard = ({ id, title, tags, date }) => {
  const datetime = formatDateTime(date);

  return (
    <div>
      <Link
        to={`/read-more/${id}`}
        className="flex flex-col justify-between lg:w-72 px-4 border border-white hover:border-blue-700 duration-300 hover:duration-300 bg-white rounded-xl lg:p-2 p-4 cursor-pointer shadow-sm lg:h-[10em]"
      >
        <div className="">
          <div
            className="font-bold text-[15px]"
            // style={{
            //   fontFamily: "'Geist Sans', sans-serif",
            // }}
          >
            {title}
          </div>
          <div className="flex flex-row gap-2">
            {tags?.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="cursor-pointer border border-white bg-slate-100 p-1 text-center w-fit h-fit px-2 text-[12px] mt-2 text-nowrap rounded-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:text-[12px] text-[14px] flex flex-row justify-between mb-1 mt-6 lg:mt-0">
          <div className="">{datetime.formattedDate}</div>
          <div className="">{datetime.formattedTime}</div>
        </div>
      </Link>
      {/* <div className="border border-transparent p-4">See All</div> */}
    </div>
  );
};

export default NoteCard;
