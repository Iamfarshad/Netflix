import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Home = () => {



  return (
    <section className="w-full h-96  ">
        <div className=" w-full h-full ">
            <img className="w-full h-96 absolute " src="https://igimage.indiaglitz.com/telugu/home/vijay_leo22062023_c.jpg" alt="" />
               <div className="relative bg-gradient-to-r from-black  h-full text-white">
                <div className="w-1/3  h-full p-2">
                  <div className="w-full h-20 flex ">
                    <div className="h-20 desklappy:h-14">
                     <img className="h-full " src="https://i.pinimg.com/originals/57/1c/af/571cafa3bbc8ea80de7e682003f73a62.png" alt=""  />
                    </div>  
                    <div className="h-20 flex desklappy:items-center desk:items-center 2xl:items-center justify-center">
                        <span className="desklappy:text-xl desk:text-2xl 2xl:text-xl font-robotoMono font-bold">Movies</span>
                    </div>  
                  </div>
                  <div className="w-full h-24 desklappy:text-7xl tab:text-10xl desk:text-8xl 2xl:text-7xl">
                      <span className="ml-6 font-playfair text-white">LEO</span>
                  </div>
                  <div className="w-full h-auto  text-white font-playfair tab:block  desklappy:text-sm  phone:text-xs 2xl:text-lg phone:hidden">
                  <span >
                  Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.
                  </span>
                  </div>
                  <div className="w-full h-28 flex gap-4  items-center   phone:items-end ">
                    <button className="bg-white text-black hover:bg-red-700 hover:text-white rounded-lg px-16 gap-2 flex justify-center items-center h-12">
                    <FaPlay /> Play
                    </button>
                    <button className="bg-gray-300 text-black hover:bg-red-700 hover:text-black   rounded-lg px-16 gap-2 flex  items-center h-12">
                    <IoMdAdd className="text-xl" /> List
                    </button>
                  </div>
                </div>
               </div>
        </div>
    </section>
  )
}

export default Home