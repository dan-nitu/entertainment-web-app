import SearchInput from '../components/SearchInput';
import MovieCard from '../components/MovieCard';

const Bookmarked = ({ bookmarkedMovies }) => {
  return (
    <div className='container'>
      <SearchInput placeholder='Search for bookmarked shows' />

      <div className='cards-section'>
        <h2>Bookmarked Movies</h2>
        <div className='cards-list'>
          {bookmarkedMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Bookmarked;
