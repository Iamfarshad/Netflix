import axios from "axios";
import { useEffect, useState } from "react";

const apikey = "5687f54775198dadfdcd600504a59736";
const url = "https://api.themoviedb.org/3";
const nowplaying = "now_playing";
const image_Url = "https://image.tmdb.org/t/p/w500";

const Popular = () => {
  const [nowplayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`);
        setNowPlayingMovies(results);
        console.log(results);
    }
    fetchPopular();
  });

  return (
    <div className="flex gap-4">
  {nowplayingMovies.map((movie) => (
    <div key={movie.id} className="w-48 h-64 flex-shrink-0 ">
      {/* Movie Poster */}
      <div className="w-full h-full ">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={`${image_Url}${movie.poster_path}`} // Use movie.poster_path dynamically
          alt={movie.title} // Use movie.title for accessibility
        />
      </div>
    </div>
  ))}
</div>


  );
};

export default Popular;
