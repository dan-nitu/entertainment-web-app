import { Link } from 'react-router';

import logo from '../assets/images/logo.svg';
import iconHome from '../assets/images/icon-nav-home.svg';
import moviesIcon from '../assets/images/icon-nav-movies.svg';
import tvIcon from '../assets/images/icon-nav-tv-series.svg';
import bookmarkIcon from '../assets/images/icon-nav-bookmark.svg';
import userIcon from '../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} className='logo' alt='Logo' />
      </Link>

      <ul>
        <li>
          <Link to='/'>
            <img src={iconHome} alt='Home' />
          </Link>
        </li>

        <li>
          <Link to='/movies'>
            <img src={moviesIcon} alt='Movies' />
          </Link>
        </li>

        <li>
          <Link to='/tv-series'>
            <img src={tvIcon} alt='TV Series' />
          </Link>
        </li>

        <li>
          <Link to='/bookmarked'>
            <img src={bookmarkIcon} alt='Bookmark' />
          </Link>
        </li>
      </ul>

      <img src={userIcon} className='user-avatar' alt='User Avatar' />
    </nav>
  );
};

export default Navbar;
