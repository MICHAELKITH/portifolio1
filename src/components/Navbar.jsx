import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNav from './sideNav';
import '../pages/Style.css';

const myLinks = [
  { to: '/', name: 'Home' },
  { to: '/project', name: 'Projects' },
  { to: '/about', name: 'About' },
  { to: '/contact', name: 'Contact' },
];

let mykey = 'Abcdef1z';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink
          className={`${(link) => (link.isActive ? 'link active' : 'link')} logo`}
          to="https://www.buymeacoffee.com/mikecode"
        >
          Michael
        </NavLink>
        <ul className="page-flow">
          {
              myLinks.map((mylink) => {
                mykey += 1;
                return (
                  <li key={mykey}>
                    <NavLink
                      className={(link) => (link.isActive ? 'link active' : 'link')}
                      to={mylink.to}
                    >
                      { mylink.name }
                    </NavLink>
                  </li>
                );
              })
          }
        </ul>
      </nav>
      <SideNav />
    </>
  );
}
