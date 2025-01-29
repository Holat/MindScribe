import { useAuth } from "../../context/AuthContext.jsx";
import headerLogo from "../assets/bulgatti.png";

export default function HomeHeader() {
  const { user } = useAuth();

  return (
    <div>
      <div className="flex flex-row justify-between items-center py-4 px-4 mb-4">
        <div className="">
          <img src={headerLogo} alt="" className="w-30" />
        </div>
        <div>Hello, {`${user?.fullName.split(" ")[0] || "User"}`}</div>
      </div>
    </div>
  );
}
