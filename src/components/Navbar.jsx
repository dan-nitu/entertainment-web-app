import { NavLink } from 'react-router';

import logo from '../assets/images/logo.svg';

import iconHome from '../assets/images/icon-nav-home.svg';
import moviesIcon from '../assets/images/icon-nav-movies.svg';
import tvIcon from '../assets/images/icon-nav-tv-series.svg';
import bookmarkIcon from '../assets/images/icon-nav-bookmark.svg';

import userIcon from '../assets/images/image-avatar.png';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>
        <img src={logo} className='logo' alt='Logo' />
      </NavLink>

      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src={iconHome} alt='Home' />
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/movies'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src={moviesIcon} alt='Movies' />
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/tv-series'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src={tvIcon} alt='TV Series' />
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/bookmarked'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src={bookmarkIcon} alt='Bookmark' />
          </NavLink>
        </li>
      </ul>

      <img src={userIcon} className='user-avatar' alt='User Avatar' />
    </nav>
  );
};

export default Navbar;
