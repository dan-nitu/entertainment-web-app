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
  const [searchTerm, setSearchTerm] = useState('');

  const trendingMovies = moviesData.filter((movie) => movie.isTrending);
  const recommendedMovies = moviesData.filter((movie) => !movie.isTrending);

  const movies = moviesData.filter((movie) => movie.category === 'Movie');
  const tvSeries = moviesData.filter((movie) => movie.category === 'TV Series');

  const bookmarkedMovies = moviesData.filter((movie) => movie.isBookmarked);

  const filteredTrending = trendingMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const filteredRecommended = recommendedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const filteredTVSeries = tvSeries.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredBookmarked = bookmarkedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
              trendingMovies={filteredTrending}
              recommendedMovies={filteredRecommended}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleBookmark={handleBookmark}
            />
          }
        />
        <Route
          path='/movies'
          element={
            <Movies
              movies={filteredMovies}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleBookmark={handleBookmark}
            />
          }
        />
        <Route
          path='/tv-series'
          element={
            <TVSeries
              tvSeries={filteredTVSeries}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleBookmark={handleBookmark}
            />
          }
        />
        <Route
          path='/bookmarked'
          element={
            <Bookmarked
              bookmarkedMovies={filteredBookmarked}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
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
