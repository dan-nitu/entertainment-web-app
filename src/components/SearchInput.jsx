import searchIcon from '../assets/images/icon-search.svg';

const SearchInput = () => {
  return (
    <div className='search-input'>
      <label htmlFor='search'>
        <img src={searchIcon} alt='Search' />
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search for movies or TV series'
      />
    </div>
  );
};
export default SearchInput;
