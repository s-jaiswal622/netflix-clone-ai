import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("usePopularMovies", data.results);
          dispatch(addPopularMovies(data.results));
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    
      useEffect(() => {
        getNowPlayingMovies();
      }
    , []);


}
export default usePopularMovies;