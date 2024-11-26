import { React, useEffect, useState } from 'react'
import './Blog.css'
import { NavLink } from 'react-router-dom'
import Head from './Head'
import { useNavigate } from "react-router-dom";





const Navigation = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const menu_bar = document.querySelector('.menu-bar');


    const toggle_menu = () => {
      hamburger.classList.toggle('hamactive');
      menu_bar.classList.toggle('hamactive');
    }

    const close_menu = () => {
      hamburger.classList.remove('hamactive');
      menu_bar.classList.remove('hamactive');
    }

    if (hamburger) {
      hamburger.addEventListener('click', toggle_menu)
    }

    document.querySelectorAll('.Nav-Link').forEach((close) => (
      close.addEventListener('click', close_menu)
    ));

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', toggle_menu)
      }

      document.querySelectorAll('.Nav-Link').forEach((close) => (
        close.removeEventListener('click', close_menu)
      ));
    }

  }, [])
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`search/${searchText}`);
  }


  return (
    <>
      <Head />
      <div className="nav-search">
      
      <div className="nav-right">
        <nav>
          <ul className="menu-bar">
            <li className="menu_list">
              <NavLink to="/" className="Nav-Link">
                Home
              </NavLink>
              <div className="menu_underline"></div>
            </li>
            <li className="menu_list">
              <NavLink to="/bollywood" className="Nav-Link">
                Bollywood
              </NavLink>
              <div className="menu_underline"></div>
            </li>
            <li className="menu_list">
              <NavLink to="/technology" className="Nav-Link">
                Technology
              </NavLink>
              <div className="menu_underline"></div>
            </li>
            <li className="menu_list">
              <NavLink to="/hollywood" className="Nav-Link">
                Hollywood
              </NavLink>
              <div className="menu_underline"></div>
            </li>
            <li className="menu_list">
              <NavLink to="/fitness" className="Nav-Link">
                Fitness
              </NavLink>
              <div className="menu_underline"></div>
            </li>
            <li className="menu_list">
              <NavLink to="/food" className="Nav-Link">
                Food
              </NavLink>
              <div className="menu_underline"></div>
            </li>
          </ul>
          <div className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </div>
      <div className="search-container">
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="search-input" />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      </div>
    </>
  )
}

export default Navigation