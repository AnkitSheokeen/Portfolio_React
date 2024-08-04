import { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import navphoto from './img/nav-logo.png'

function Navbar() {
    const [navActive , setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize",handleResize);

        return () => {
            window.removeEventListener("resize",handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src={navphoto} alt="Logo" />
            </div>
            <Link className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </Link>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="herosection" className="navbar--content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">AboutMe</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Testimonial" className="navbar--content">Projects</Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary">ContactMe</Link>
        </nav>
    );
}
export default Navbar;