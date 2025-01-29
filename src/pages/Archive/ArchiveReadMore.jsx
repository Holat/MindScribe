import BackArrow from "../../components/BackArrow";
import headerLogo from "../../assets/bulgatti.png";
import { CgTag } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";
import HomeIcons from "../../components/HomeIcons";

export default function ArchiveReadMore() {
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
            Japan Travel Planning
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
          <div>Travel, Personal</div>
        </div>
        <hr className="opacity-20" />

        {/* dummy details. */}
        <div className="py-4 pb-44">
          {/* <div>Things to note down:</div> */}
          <div className="flex flex-col gap-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
