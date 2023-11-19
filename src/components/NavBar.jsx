import { IoHome } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="p-4 border-b-2 bg-black border-white flex flex-col sm:flex-row items-center justify-around">
      <div className="flex items-center flex-col sm:flex-row space-x-2 mb-4 sm:mb-0">
        <img src="/moptro logo@2x.png" alt="Moptro Logo" className="h-14" />
        <span className="text-white text-md font-semibold">MOPTro</span>
      </div>

      <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
        <Link
          to={"/dashboard"}
          className="text-white flex items-center justify-center flex-col hover:text-green-300"
        >
          <IoHome />
          <span>Home</span>
        </Link>
        <Link
          to={"/user"}
          className="text-white flex items-center justify-center flex-col hover:text-green-300"
        >
          <FaUserTie />
          <span>User</span>
        </Link>
      </div>

      <div className="flex flex-row-reverse space-y-4 sm:space-y-0 sm:space-x-4 ">
        <Link
          to={"/"}
          className="bg-green-400 text-white px-4 py-2 rounded-md  hover:bg-green-500"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
