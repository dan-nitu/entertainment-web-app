import SearchInput from '../components/SearchInput';
import MovieCard from '../components/MovieCard';

const Movies = ({ movies, handleBookmark }) => {
  return (
    <div className='container'>
      <SearchInput placeholder='Search for movies' />

      <div className='cards-section'>
        <h2>Movies</h2>
        <div className='cards-list'>
          {movies.map((movie) => (
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
export default Movies;
