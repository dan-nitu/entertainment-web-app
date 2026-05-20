import SearchInput from '../components/SearchInput';
import MovieCard from '../components/MovieCard';

const Movies = ({ movies, searchTerm, setSearchTerm, handleBookmark }) => {
  return (
    <div className='container'>
      <SearchInput
        placeholder='Search for movies'
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

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
