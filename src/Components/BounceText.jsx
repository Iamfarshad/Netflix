import { FaArrowDown } from "react-icons/fa6";
const BounceText = () => {
  const handleScroll = () => {
    window.scrollBy ({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full h-full bg-black flex-col flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center mt-4 text-white">
    Streaming
  </h1>
  <p className="text-lg text-center text-white">Now Stream Your movies</p>
  <div className="flex justify-center items-center w-12 h-12 border mt-2 rounded-full bg-white animate-bounce cursor-pointer" onClick={handleScroll}>
  <FaArrowDown className="text-black" />
  </div>
  

  </div>
  )
}

export default BounceText