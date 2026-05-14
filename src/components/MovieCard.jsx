import moviesIcon from '../assets/images/icon-category-movie.svg';
import bookmarkIcon from '../assets/images/icon-bookmark-empty.svg';

const MovieCard = ({ movie, trending = false }) => {
  let imageSrc;

  if (trending) {
    imageSrc = movie.thumbnail.trending.small;

    if (window.innerWidth >= 768) {
      imageSrc = movie.thumbnail.trending.large;
    }
  } else {
    imageSrc = movie.thumbnail.regular.small;

    if (window.innerWidth >= 768) {
      imageSrc = movie.thumbnail.regular.medium;
    }
    if (window.innerWidth >= 1440) {
      imageSrc = movie.thumbnail.regular.large;
    }
  }

  return (
    <div className={'movie-card' + (trending ? ' trending' : '')}>
      <div className='thumbnail-wrapper'>
        <img src={imageSrc} alt={movie.title} />
        <span className='bookmark'>
          <img src={bookmarkIcon} alt='bookmarkIcon' />
        </span>
      </div>

      <div className='info-container'>
        <div className='metadata'>
          <span>{movie.year}</span>
          <span>
            <img src={moviesIcon} alt='moviesIcon' /> {movie.category}
          </span>
          <span>{movie.rating}</span>
        </div>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
