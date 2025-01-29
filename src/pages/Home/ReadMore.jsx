import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import { CgTag } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";
import HomeIcons from "../../components/HomeIcons";

export default function ReadMore() {
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
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold text-[20px] font-sans tracking-wider">
            React Performance Optimization
          </div>
          <div className="flex flex-row items-center gap-6 mr-2">
            <FaTrash size={15} className="text-red-500 cursor-pointer" />
            <BsArchive size={15} className="text-blue-700 cursor-pointer" />
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
          <div>Dev, React</div>
        </div>
        <hr className="opacity-20" />

        {/* dummy details. */}
        <div className="py-4 pb-44">
          <div>Key Performance optimization techniques:</div>
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
          </div>
        </div>
      </div>

      {/* home icons. */}
      <div>
        <HomeIcons />
      </div>
    </div>
  );
}
