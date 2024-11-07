import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const API_KEY = '3a04bd935b4c76613fdcb308995e1a2f'; 

const DetailsFilm = () => {
  const { id_details } = useParams();  // Récupération du paramètre ID de l'URL
  const [filmData, setFilmData] = useState(null);  // État pour stocker les détails du film

  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${id_details}?api_key=${API_KEY}`;



  useEffect(() => {
    fetch(DETAILS_API_URL)
      .then(response => response.json())
      .then(data => {
        setFilmData(data);  // Stockage des données du film dans l'état
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, [DETAILS_API_URL]);

  // Si les données ne sont pas encore chargées, afficher un message de chargement
  if (!filmData) {
    return <p>Chargement...</p>;
  }
const styleElement = {
  background: `url(https://image.tmdb.org/t/p/w500${filmData.poster_path})`,
  backgroundRepeat: 'no-repeat',  
  backgroundSize: 'cover',  
  backgroundPosition: 'center' ,
 
};
  return (
    <>
      <div className="flex py-5 h-[80vh] text-white " style={styleElement}>
        <div className="w-1/ flex justify-center">
          <img 
            src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`} 
            alt={filmData.title} 
            className='h-4/6'
          />
        </div>
        <div className="flex flex-col w-2/3 p-4">
          <h3>{filmData.title} ({new Date(filmData.release_date).getFullYear()})</h3>
          <div className="flex">
            <span>{filmData.vote_average}</span> {/* Note moyenne */}
            <span> ({filmData.vote_count} votes)</span> {/* Compte des votes */}
          </div>
          <div className="my-2">
            {/* Genres */}
            {filmData.genres.map(genre => (
              <span key={genre.id} className="mr-2">{genre.name}</span>
            ))}
          </div>
          <p><strong>Tagline:</strong> {filmData.tagline}</p>
          <h4>Overview</h4>
          <p>{filmData.overview}</p>

          {/* Autres informations */}
          <div className="mt-4">
            <p><strong>Date de sortie:</strong> {filmData.release_date}</p>
            <p><strong>Durée:</strong> {filmData.runtime} minutes</p>
            <p><strong>Budget:</strong> ${filmData.budget.toLocaleString()}</p>
            <p><strong>Recette:</strong> ${filmData.revenue.toLocaleString()}</p>
            <p><strong>Langue originale:</strong> {filmData.original_language}</p>
            <p><strong>Pays origine:</strong> {filmData.production_countries.map(country => country.name).join(', ')}</p>

            {/* Production Companies */}
            <p><strong>Compagnies de production:</strong> {filmData.production_companies.map(company => company.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsFilm;
