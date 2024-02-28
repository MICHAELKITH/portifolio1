import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css'; // Import Materialize CSS library
import './sideNav.css';

const myLinks = [
  { to: '/', name: 'Home' },
  { to: '/project', name: 'Projects' },
  { to: '/about', name: 'About' },
  { to: '/contact', name: 'Contact' },
];

const SideNav = () => {
  const sidenavRef = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sidenavRef.current);
  }, []);

  const handleNav = () => {
    const sidenavInstance = M.Sidenav.getInstance(sidenavRef.current);
    sidenavInstance.close();
  };

  return (
    <>
      <ul id="slide-out" className="sidenav" ref={sidenavRef}>
        <li><a className="sidenav-close" href="#!" onClick={handleNav}><i className="medium right material-icons"><img src="../images/close.png" alt="LinkedIn" /></i></a></li>
        <li>
          <div className="user-view">
            <p className="black-text name"><a href="https://www.buymeacoffee.com/mikecode">By me a coffee</a></p>
            <a href="#email"><span className="blue-text email">mikecode945@gmail.com</span></a>
          </div>
        </li>
        {myLinks.map((mylink, index) => (
          <li key={index}>
            <NavLink
              className="link"
              activeClassName="mobile"
              to={mylink.to}
            >
              {mylink.name}
            </NavLink>
          </li>
        ))}

        {/* Add Cancel Button */}
      </ul>
      <a href="#!" data-target="slide-out" className="sidenav-trigger" onClick={handleNav}><i className="material-icons"><img src="../images/menu1.png" alt="LinkedIn" /></i></a>
    </>
  );
};

export default SideNav;
