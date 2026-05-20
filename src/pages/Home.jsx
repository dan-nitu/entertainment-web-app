import SearchInput from '../components/SearchInput';
import MovieCard from '../components/MovieCard';

const Home = ({ trendingMovies, recommendedMovies, handleBookmark }) => {
  return (
    <div className='container'>
      <SearchInput />

      <div className='trending'>
        <h2>Trending</h2>
        <div className='trending-movies'>
          {trendingMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              trending={true}
              handleBookmark={handleBookmark}
            />
          ))}
        </div>
      </div>

      <div className='cards-section'>
        <h2>Recommended for you</h2>
        <div className='cards-list'>
          {recommendedMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              handleBookmark={handleBookmark}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
