import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constant';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("usePopularMovies", data.results);
          dispatch(addTopRatedMovies(data.results));
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    
      useEffect(() => {
        getNowPlayingMovies();
      }
    , []);


}
export default useTopRatedMovies;