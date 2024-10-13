import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from './Api'; // Import the API function

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]); // State to hold movie data
  const [loading, setLoading] = useState<boolean>(true); // State for loading indicator

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchPopularMovies(); // Fetch movies from the API
      setMovies(fetchedMovies);
      setLoading(false); // Set loading to false when data is fetched
    };

    getMovies();
  }, []); // Empty dependency array to ensure this runs once on component mount

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
