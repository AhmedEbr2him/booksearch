import './Loader.css';
import loaderImg from '../../images/loader.svg';

const Loader = () => {
  return (
    <div className='loader flex justify-center'>
      <img src={loaderImg} alt='Loader Animation' />
    </div>
  );
};

export default Loader;
