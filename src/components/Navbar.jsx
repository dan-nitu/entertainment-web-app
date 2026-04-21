import logo from '../assets/images/logo.svg';
import iconHome from '../assets/images/icon-nav-home.svg';
import moviesIcon from '../assets/images/icon-nav-movies.svg';
import tvIcon from '../assets/images/icon-nav-tv-series.svg';
import bookmarkIcon from '../assets/images/icon-nav-bookmark.svg';
import userIcon from '../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className='logo' alt='Logo' />

      <ul>
        <li>
          <img src={iconHome} alt='Home' />
        </li>
        <li>
          <img src={moviesIcon} alt='Movies' />
        </li>
        <li>
          <img src={tvIcon} alt='TV Series' />
        </li>
        <li>
          <img src={bookmarkIcon} alt='Bookmark' />
        </li>
      </ul>

      <img src={userIcon} className='user-avatar' alt='User Avatar' />
    </nav>
  );
};
export default Navbar;
