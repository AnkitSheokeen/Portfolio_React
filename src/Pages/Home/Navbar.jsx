import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import navphoto from '../img/nav-logo.png'

function Navbar() {
    const [navActive, setNavActive] = useState(false);
  
    const toggleNav = () => {
      setNavActive(!navActive);
    };
  
    const closeMenu = () => {
      setNavActive(false);
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 500) {
          closeMenu();
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    }, []);
  
    return (
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div className="nav-container">
          <div >
            <img className="logo" src={navphoto} alt="Logo" />
          </div>

          
            <button className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav} >
              <span className="nav__hamburger__line"></span>
              <span className="nav__hamburger__line"></span>
              <span className="nav__hamburger__line"></span>
            </button>


          <div className={`navbar--list ${navActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  onClick={closeMenu}
                  activeclassName="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar--content"
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  onClick={closeMenu}
                  activeclassName="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Myprojects"
                  className="navbar--content"
                >
                  About
                </Link>
              </li>
              <li>
              <Link
                  onClick={closeMenu}
                  activeclassName="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Education"
                  className="navbar--content"
                >
                  Education
                </Link>
              </li>
              <li>
              <Link
                  onClick={closeMenu}
                  activeclassName="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MySkills"
                  className="navbar--content"
                >
                  Skills
                </Link>
              </li>
              <li>
              <Link
                  onClick={closeMenu}
                  activeclassName="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Myprojects"
                  className="navbar--content"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeclassName="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="ContactME"
                  className="navbar--content"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;