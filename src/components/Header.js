import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import RamadhanImage from '../image/Ramadhan.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="image-container">
        <img src={RamadhanImage} alt="Muhammad Ramadhan" className="profile-image" />
      </div>
      <h1 className="name">Muhammad Ramadhan Bin Rahmat</h1>

      <nav className="nav-links">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => {
                console.log('About isActive:', isActive);
                return isActive ? "active-link" : undefined;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/experience" 
              className={({ isActive }) => {
                console.log('Experience isActive:', isActive);
                return isActive ? "active-link" : undefined;
              }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/hobbies" 
              className={({ isActive }) => {
                console.log('Hobbies isActive:', isActive);
                return isActive ? "active-link" : undefined;
              }}
            >
              Hobbies
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => {
                console.log('Contact isActive:', isActive);
                return isActive ? "active-link" : undefined;
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;