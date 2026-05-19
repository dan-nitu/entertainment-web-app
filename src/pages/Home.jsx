import SearchInput from '../components/SearchInput';

import MovieCard from '../components/MovieCard';

const Home = ({ trendingMovies, recommendedMovies }) => {
  return (
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
  );
};
export default Home;
