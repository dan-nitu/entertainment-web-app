import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import Bookmarked from './pages/Bookmarked';

import Navbar from './components/Navbar';

import DATA from './data/data.json';

import { useState } from 'react';

function App() {
  const [moviesData, setMoviesData] = useState(DATA);

  const trendingMovies = moviesData.filter((movie) => movie.isTrending);
  const recommendedMovies = moviesData.filter((movie) => !movie.isTrending);

  const movies = moviesData.filter((movie) => movie.category === 'Movie');
  const tvSeries = moviesData.filter((movie) => movie.category === 'TV Series');

  const bookmarkedMovies = moviesData.filter((movie) => movie.isBookmarked);

  const handleBookmark = (title) => {
    setMoviesData((prevData) =>
      prevData.map((movie) =>
        movie.title === title
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={
            <Home
              trendingMovies={trendingMovies}
              recommendedMovies={recommendedMovies}
              handleBookmark={handleBookmark}
            />
          }
        />
        <Route
          path='/movies'
          element={<Movies movies={movies} handleBookmark={handleBookmark} />}
        />
        <Route
          path='/tv-series'
          element={
            <TVSeries tvSeries={tvSeries} handleBookmark={handleBookmark} />
          }
        />
        <Route
          path='/bookmarked'
          element={
            <Bookmarked
              bookmarkedMovies={bookmarkedMovies}
              handleBookmark={handleBookmark}
            />
          }
        />

        {/* 404 */}
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
