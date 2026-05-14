import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';

import MovieCard from './components/MovieCard';

import DATA from './data/data.json';

import { useState } from 'react';

function App() {
  const [moviesData, setMoviesData] = useState(DATA);

  const trendingMovies = moviesData.filter((movie) => movie.isTrending);
  const recommendedMovies = moviesData.filter((movie) => !movie.isTrending);

  return (
    <>
      <Navbar />

      <div className='container'>
        <SearchInput />

        <div className='trending'>
          <h2>Trending</h2>
          <div className='trending-movies'>
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} trending={true} />
            ))}
          </div>
        </div>

        <div className='recommended'>
          <h2>Recommended for you</h2>
          <div className='recommended-movies'>
            {recommendedMovies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
