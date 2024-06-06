import './SearchForm.css';
import { FaSearch } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contextApp';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    searchText.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('the lost world');
      setResultTitle('Please Enter Somthing...');
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate('/book');
  };
  return (
    <div className='search_form'>
      <div className='container'>
        <div className='search_form_content'>
          <form className='search_form' onSubmit={handleSubmit}>
            <div className='search_form_elem flex justify-between bg-white'>
              <input
                type='text'
                name='search'
                className='form-control'
                placeholder='The Lost World...'
                ref={searchText}
              />
              <button
                type='submit'
                className='flex justify-center'
                onClick={handleSubmit}>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
