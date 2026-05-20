import SearchInput from '../components/SearchInput';
import MovieCard from '../components/MovieCard';

const TVSeries = ({ tvSeries, searchTerm, setSearchTerm, handleBookmark }) => {
  return (
    <div className='container'>
      <SearchInput
        placeholder='Search for TV series'
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className='cards-section'>
        <h2>TV Series</h2>
        <div className='cards-list'>
          {tvSeries.map((movie) => (
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

export default TVSeries;
