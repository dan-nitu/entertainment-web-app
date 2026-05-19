import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import Bookmarked from './pages/Bookmarked';

import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';

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

        <Routes>
          <Route
            path='/'
            element={
              <Home
                trendingMovies={trendingMovies}
                recommendedMovies={recommendedMovies}
              />
            }
          />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv-series' element={<TVSeries />} />
          <Route path='/bookmarked' element={<Bookmarked />} />

          {/* 404 */}
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
