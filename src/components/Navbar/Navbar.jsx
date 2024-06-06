import './Navbar.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const hanldeCloseMenu = e => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setToggleMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', hanldeCloseMenu);
    return () => {
      document.removeEventListener('click', hanldeCloseMenu);
    };
  }, []);

  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar_content flex'>
        <div className='brand_and_toggler flex justify-between'>
          <Link to={'/'} className='navbar-brand flex'>
            <img src={logoImg} alt='Site Logo' />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button
            type='button'
            className='navbar_toggler_btn'
            onClick={handleNavbar}
            ref={menuRef}>
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: `${toggleMenu ? '#fff' : '#010101'}` }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu ? 'navbar-collapse show-navbar-collapse' : 'navbar-collapse'
          }>
          <ul className='navbar-nav'>
            {[
              { linkText: 'home', linkHref: '/book' },
              { linkText: 'about', linkHref: '/about' },
            ].map((linkItem, index) => {
              return (
                <li className='nav-item' key={index}>
                  <Link
                    to={linkItem.linkHref}
                    className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                    {linkItem.linkText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
