import React, { startTransition, useState } from 'react';
import headerimage from '../assets/images/header.png';
import '../App.css';
import { Link,  useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavSection() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClasses = (path) => {
    return location.pathname === path ? 'navbar-link active' : 'navbar-link';
  };

  const toggleMenu = () => {
       startTransition(() => {
        setMenuOpen((prev) => !prev); 
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <>
      
      {/* //lap */}
        <nav className="navbar  md:block hidden">
          <div className="navbar-container px-4 flex items-center justify-between">
            <img src={headerimage} alt="Logo" className="navbar-logo" />
          <ul className={`navbar-menu flex items-center justify-center  `}>
            <li className="navbar-item">
              <Link to="/home" className={getLinkClasses("/home")}>HOME</Link>
            </li>
            <li className="navbar-item">
              <Link to="/courses" className={getLinkClasses("/courses")}>COURSES</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className={getLinkClasses("/contact")}>CONTACT</Link>
            </li>
            <li className="navbar-item">
              <Link to="/careers" className={getLinkClasses("/careers")}>CAREERS</Link>
            </li>
            {/* <button className="btn-login">LOGIN</button> */}
            <button className="btn-book">BOOK A FREE DEMO</button>
          </ul>
          </div>
        </nav>
     
      {/* //mobile */}
     
<nav className={`navbar ${menuOpen ? 'rounded-t-5xl pb-4' : ''} md:hidden block`}>
  <div className="navbar-container px-4 flex items-center justify-between">
    <img src={headerimage} alt="Logo" className={`navbar-logo`} />
    
    <button className="menu-button" onClick={toggleMenu}>
      {menuOpen ? <CloseIcon/> : <MenuIcon/>}
    </button>
  </div>

  <ul className={`navbar-menu flex flex-col items-center space-y-2 transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
    <li className="navbar-item">
      <Link to="/home" className={`${getLinkClasses("/home")} block w-full text-center py-2 text-sm font-medium`} onClick={closeMenu}>
        HOME
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/courses" className={`${getLinkClasses("/courses")} block w-full text-center py-2 text-sm font-medium`} onClick={closeMenu}>
        COURSES
      </Link>
    </li>
    <li className="navbar-item ">
      <Link to="/contact" className={`${getLinkClasses("/contact")} block w-full text-center py-2 text-sm font-medium`} onClick={closeMenu}>
        CONTACT
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/careers" className={`${getLinkClasses("/careers")} block w-full text-center py-2 text-sm font-medium`} onClick={closeMenu}>
        CAREERS
      </Link>
    </li>
    {/* <button className="btn-login  py-2">LOGIN</button> */}
    <button className="btn-book pb-4">BOOK A FREE DEMO</button>
  </ul>
</nav>




     
    </>
  );
}
