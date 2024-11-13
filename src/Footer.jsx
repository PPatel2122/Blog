import React from 'react'
import './Blog.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <>
    <div className="footer">
          <div className="footerlogo">
            
          <div className="first-onee">
          <div className="first-the">The</div>
          <div className="first-siren">Siren</div>
        </div>
            <p className="footerboutblog">
              The Devil's Domain is an informational website published on the World Wide
              Web for providing details of different category.
            </p>
            <div className="socialmedia">
              <div className="twitter"></div>
              <div className="facebook"></div>
              <div className="YouTube"></div>
              <div className="instagram"></div>
            </div>
          </div>

          <div className="footernav">
            <div className="footerservices">
              <h3>Services</h3>

              <div className="footernavbutton">
                <ul className="footermenulist">
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className=""
                      to="/"
                    >
                      Home
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className=""
                      to="/"
                    >
                      Bollywood
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className=""
                      to="/"
                    >
                      Technology
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className=""
                      to="/"
                    >
                      Hollywood
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className=""
                      to="/"
                    >
                      Fitness
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                  <li className="footermenu">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#1c3342" : "#000000",
                      })}
                      className=""
                      to="/"
                    >
                      Food
                    </NavLink>
                    <div className="menu_underline"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerresources">
              <h3>Resources</h3>
              <div className="footerresoption">
                <p>Blog</p>
                <p>Help Center</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          <div className="footerenjoy">
            <h1>Get Ready to Enjoy on the Blog-Machine !!!</h1>
          </div>
          <button onClick={scrollToTop} className="scrollbutton">
            <div className="scrolltoperoimg"></div>
            Back to Top
          </button>
        </div>
    </>
  );
}

export default Footer