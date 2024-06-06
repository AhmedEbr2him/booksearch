import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header_content flex justify-center flex-column text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus
            sequi assumenda nam necessitatibus, eum mollitia itaque a!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
