import Header from "../Components/Header";
import Home from "../Components/Home";
import BounceText from "../Components/BounceText";
import Body from "../Components/Body";
import Popular from "../Components/Popular";
import TopRated from "../Components/TopRated";
import Upcoming from "../Components/Upcoming";
import Footer from "../Components/Footer";
const Streaming = () => {
  return (
    <>
      <section className="flex  flex-col">
        <div className="w-full h-20">
          <Header />
        </div>
        <div className="w-full ">
          <Home />
        </div>
        <div className="w-full h-auto">
          <BounceText />
        </div>

         {/* NowPlaying  */}

        <div className="w-full h-auto bg-black">
          <section className="w-full h-full flex gap-2 flex-col">
            <div>
              <span className="text-white text-xl font-roboto">Now Playing</span>
            </div>
            <div className="w-full overflow-x-scroll">
              <div className="flex items-center gap-2 min-w-max">
                <Body />
              </div>
            </div>
          </section>
        </div>

        {/* Popular */}

        <div className="w-full h-auto bg-black">
          <section className="w-full h-full flex gap-2 flex-col">
            <div>
              <span className="text-white text-xl font-roboto">Popular</span>
            </div>
            <div className="w-full overflow-x-scroll">
              <div className="flex items-center gap-2 min-w-max">
                <Popular />
              </div>
            </div>
          </section>
        </div>

        {/* Top Rated */}

        <div className="w-full h-auto bg-black">
          <section className="w-full h-full flex gap-2 flex-col">
            <div>
              <span className="text-white text-xl font-roboto">Top rated</span>
            </div>
            <div className="w-full overflow-x-scroll">
              <div className="flex items-center gap-2 min-w-max">
                <TopRated />
              </div>
            </div>
          </section>
        </div>

        {/* upcoming */}

        <div className="w-full h-auto bg-black">
          <section className="w-full h-full flex gap-2 flex-col">
            <div>
              <span className="text-white text-xl font-roboto">Upcoming</span>
            </div>
            <div className="w-full overflow-x-scroll">
              <div className="flex items-center gap-2 min-w-max">
                <Upcoming />
              </div>
            </div>
          </section>
        </div>
        
         <div className="w-full h-auto bg-black">
             <Footer />
         </div>
      </section>
    </>
  );
};

export default Streaming;
