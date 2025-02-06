import { BiX } from "react-icons/bi";

export default function ListOfNames({ open, setOpen }) {
  function closeNames() {
    setOpen(false);
  }

  return (
    <div className="inset-0 bg-transparent bg-opacity-0 flex items-center justify-center z-50 pt-10 pb-5">
      <div className="bg-white w-[90%] max-w-lg p-8 rounded-lg shadow-md relative text-center">
        {/* Skip Button */}
        <button
          onClick={closeNames}
          className="absolute text-white top-4 right-4 bg-red-500 px-3 py-1 rounded-md text-sm hover:opacity-50 cursor-pointer"
        >
          <BiX size={10} />
        </button>

        {/* Header */}
        <h2
          className="text-xl font-bold text-blue-700"
          style={{ fontFamily: "cursive" }}
        >
          Welcome
        </h2>
        <h3
          style={{ fontFamily: "cursive" }}
          className="text-lg font-bold mt-1"
        >
          A Note-Taking App by the members of{" "}
          <strong className="text-blue-700">Group L.</strong>
        </h3>

        {/* Task Management System */}
        <div className="mt-4">
          <h4 className="font-semibold">MindScribe</h4>
          <p className="text-gray-600 text-sm">Course Code: GST 306</p>
        </div>

        {/* Team Members List */}
        <div className="mt-7">
          <h4 className="font-semibold text-md">Team Members:</h4>
          <div className="flex flex-col gap-2 mt-1 text-gray-700">
            <p>Ajayi Oluwatobi Mathew LCU/UG/22/22606</p>
            <p>Olorunshola Tomi Josiah LCU/UG/22/22586</p>
            <p>Balogun Oyinkansola LCU/UG/21/19589</p>
            <p>Oduwole Ireoluwa Adeniji LCU/UG/22/23155</p>
            <p>Elusakin Oluwayomi Comfort LCU/UG/22/24246</p>
            <p>Ereola Righteousness LCU/UG/21/20239</p>
            <p>Promise Victor Ezekiel LCU/UG/21/21137</p>
            <p>Jose Ridwan Olakunle LCU/UG/22/21403</p>
            <p>Ananze Pwamona Ashiyati LCU/PT/21/0524</p>
            <p>Adeleye Adewole Chukwumali LCU/UG/22/23795</p>
          </div>
        </div>
      </div>
    </div>
  );
}
