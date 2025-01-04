import { IoLanguage } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="w-full h-16 flex gap-1 mt-2">
        <span className="text-white">Question? Call</span>
        <span className="underline decoration-white text-red-700 cursor-pointer">
          000-800-919-1743
        </span>
      </div>

      <div className="w-full h-auto text-white justify-evenly items-center flex p-2 2xl:text-xl ">
        <div className="flex flex-col gap-2 ">
          <span className="hover:text-red-700 cursor-pointer">FAQ</span>
          <span className="hover:text-red-700 cursor-pointer">Investor Relations</span>
          <span className="hover:text-red-700 cursor-pointer">Privacy</span>
          <span className="hover:text-red-700 cursor-pointer">Speed Test</span>
        </div>
        <div className="flex flex-col gap-2 tab:hidden">
          <span className="hover:text-red-700 cursor-pointer">Help Centre</span>
          <span className="hover:text-red-700 cursor-pointer">Jobs</span>
          <span className="hover:text-red-700 cursor-pointer">Cookie Preferences</span>
          <span className="hover:text-red-700 cursor-pointer">Legal Notices</span>
        </div>
        <div className="flex flex-col gap-2 phone:hidden">
          <span className="hover:text-red-700 cursor-pointer">Account</span>
          <span className="hover:text-red-700 cursor-pointer">Ways to Watch</span>
          <span className="hover:text-red-700 cursor-pointer">Ways to Watch</span>
          <span className="hover:text-red-700 cursor-pointer">Only on Netflix</span>
        </div>
        <div className="flex flex-col gap-2">
            <span className="hover:text-red-700 cursor-pointer">Media Centre</span>
            <span className="hover:text-red-700 cursor-pointer">Terms of Use</span>
            <span className="hover:text-red-700 cursor-pointer">Contact Us</span>
            <span className="hover:text-red-700 cursor-pointer">Policy</span>
        </div>
      </div>

      <div className="w-full h-16  flex items-center justify-evenly p-2">
       <button className="flex  items-center px-10 h-10 text-lg rounded-lg bg-red-700 hover:text-black hover:bg-white font-playfair gap-1 justify-between">
       <IoLanguage className="size-10" />English <FaAngleDown  className="size-6"/>
       </button>
      </div>
      
      <div className="w-full h-auto text-white">
           <span>Netflix India</span>
      </div>

    </footer>
  );
};

export default Footer;
