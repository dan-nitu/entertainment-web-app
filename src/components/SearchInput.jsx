import searchIcon from '../assets/images/icon-search.svg';

const SearchInput = ({
  placeholder = 'Search for movies or TV series',
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className='search-input'>
      <label htmlFor='search'>
        <img src={searchIcon} alt='Search' />
      </label>
      <input
        type='text'
        id='search'
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
