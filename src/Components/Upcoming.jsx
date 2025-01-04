import axios from "axios";
import { useEffect, useState } from "react";

const apikey = "5687f54775198dadfdcd600504a59736";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const image_Url = "https://image.tmdb.org/t/p/w500";


const Upcoming = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
      const fetchPopular = async () => {
          const {
              data: { results },
          } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
          setUpcomingMovies(results);
          console.log(results);
      }
      fetchPopular();
    });
  return (
    <div className="flex gap-4">
    {upcomingMovies.map((movie) => (
      <div key={movie.id} className="w-48 h-64 flex-shrink-0 ">
        
        <div className="w-full h-full ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={`${image_Url}${movie.poster_path}`} 
            alt={movie.title} 
          />
        </div>
      </div>
    ))}
  </div>
  )
}

export default Upcoming