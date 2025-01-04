import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLiveTv } from "react-icons/md";

const Header = () => {
  return (
    <nav className="w-full h-full bg-black text-black text-2xl items-center flex gap-5 justify-between">
      <div className="w-1/2 h-full flex justify-center items-center">
  <div className="w-full h-full flex gap-4 p-3">

    <div className="h-full w-44 justify-center items-center flex phone:w-36">
      <img
        className="h-full w-full object-cover"
        src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
        alt="Netflix Logo"
      />
    </div>

  
    <div className="w-full flex justify-center items-center gap-6 text-xl desklappy:hidden lappy:items-center lappy:block">
     
      <div className="flex flex-wrap gap-4 justify-center lappy:gap-2 phone:gap-1 text-center tab:hidden">
        <a
          className="text-white font-robotoCondensed hover:text-red-800 hover:underline"
          href="/"
        >
          TV Shows
        </a>
        <a
          className="text-white font-robotoCondensed hover:text-red-800 hover:underline"
          href="/"
        >
          Movies
        </a>
        <a
          className="text-white font-robotoCondensed hover:text-red-800 hover:underline"
          href="/"
        >
          Recently Added
        </a>
        <a
          className="text-white font-robotoCondensed hover:text-red-800 hover:underline"
          href="/"
        >
          My List
        </a>
      </div>
    </div>
  </div>
</div>


      <div className="w-1/2 h-full flex">
        <div className="w-full h-full flex gap-4 p-3 justify-around lappy:justify-end lappy:gap-3">
          <div className="w-full h-full flex items-center justify-around lappy:justify-end gap-2">
            <div className="text-white flex justify-center items-center phone:hidden">
              <IoIosAddCircleOutline className="text-3xl cursor-pointer hover:text-red-800" />
            </div>

            <div className="text-white flex justify-center items-center phone:hidden">
              <MdOutlineLiveTv className="text-3xl cursor-pointer hover:text-red-800" />
            </div>

            <div className="text-white flex justify-center items-center">
              <IoSearch className="text-3xl cursor-pointer hover:text-red-800" />
            </div>

            <div className="text-white flex justify-center items-center hover:text-black border w-16 h-14 bg-red-600 hover:bg-red-700 rounded-full lappy:w-12 lappy:h-12 iphone:w-10 iphone:h-10">
              <button className="text-xl cursor-pointer font-roboto">SF</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
