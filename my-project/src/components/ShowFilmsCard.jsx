import { Link } from 'react-router-dom';
import DetailsFilm from './DetailsFilm';
const ShowFilmsCard=({data})=>{
    return(
      <div className="bg-gray-900 min-h-screen p-5">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((movie) => (
         <Link to={`/DetailsFilm/${movie.id}/`}>
          <div key={movie.id} className="bg-gray-800  rounded-lg shadow-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-white text-lg font-bold">{movie.title}</h2>
              <p className="text-gray-400">Rating: {movie.vote_average}</p>
              <p className="text-gray-400">{movie.release_date}</p>
            </div>
          </div>
          </Link>
        ))};
      </div>
    </div>
    )

}
export default ShowFilmsCard;