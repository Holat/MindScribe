import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function BackArrow() {
  //navigate.
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        className="text-start ml-5 py-6 cursor-pointer"
      >
        <BiArrowBack size={17} />
      </div>
    </div>
  );
}
