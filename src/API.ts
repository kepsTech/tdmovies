const API_KEY = 'fd2c251a48505b6194862c22a55f7da9'; // Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results; // Return the list of popular movies
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};
