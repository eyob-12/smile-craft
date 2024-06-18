import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Pop from '../Pop/Pop';
import './Navbar.css';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext';
import log from "../../../images/log2.png";
import logo1 from "../../../images/teeth1.png";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isSticky, setSticky] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [sidebarOpen, setSidebarOpen] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
            <Toaster />
            <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} expand="lg">

                <div className="container-fluid">
                    <div className="navbar-heading d-flex gap-4">
                        <h3>
                            <Link className="navbar-h" to="/">Smile</Link>
                        </h3>
                        <img src={logo1} style={{ height: '100px' }} alt="logo" />
                        <h3>
                            <Link className="navbar-h" to="/">Craft</Link>
                        </h3>
                    </div>
                    <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleSidebar}>
                        <span >
                            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
                        </span>
                    </button>
                    <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a href="/" className={`nav-link me-3 ${activeLink === '/' ? 'active-link' : ''}`} onClick={() => setActiveLink('/')}>
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='#doctorContaints' className={`nav-link me-3 ${activeLink === '#doctorContaints' ? 'active-link' : ''}`} onClick={() => setActiveLink('#doctorContaints')}>
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#ContactPage" className={`nav-link me-3 ${activeLink === '#ContactPage' ? 'active-link' : ''}`} onClick={() => setActiveLink('#ContactPage')}>
                                    CONTACT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#BlogContaint" className={`nav-link me-3 ${activeLink === '#BlogContaint' ? 'active-link' : ''}`} onClick={() => setActiveLink('#BlogContaint')}>
                                    BLOG
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#serviceContaint" className={`nav-link me-3 ${activeLink === '#serviceContaint' ? 'active-link' : ''}`} onClick={() => setActiveLink('#serviceContaint')}>
                                    SERVICE
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#reviewsContaints" className={`nav-link me-3 ${activeLink === '#reviewsContaints' ? 'active-link' : ''}`} onClick={() => setActiveLink('#reviewsContaints')}>
                                    REVIEWS
                                </a>
                            </li>
                            <div className="dropdown">
                                <li className="nav-item">
                                    {user?.email ? (
                                        <Pop />
                                    ) : (
                                        <span className="login-container">
                                            <Link to="/login" className="login-link">
                                                <img src={log} style={{ height: '50px', width: '50px' }} className="rounded-circle login-image border border-info bg-info" alt="logo" />
                                                <span className="login-text">LOGIN</span>
                                            </Link>
                                        </span>
                                    )}
                                </li>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
