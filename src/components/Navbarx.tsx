import React from 'react'
import '../style/Navbarx.css'
import { LightLogo } from "../assets/logo";

const Navbarx = () => {

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        event.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className='navbarx'>
            <div className="nav-container">
                <div className="logo">
                    <LightLogo />
                </div>
                <div className="desktop-menu">
                    <ul>
                        <li>
                            <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
                        </li>
                        <li>
                            <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-menu">
                    <label className="popup" htmlFor="mobile-menu-checkbox">
                        <input type="checkbox" id="mobile-menu-checkbox" aria-label="Toggle mobile menu" />
                        <div className="circle"></div>
                        <div className="burger" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="mobile-menu-links">
                            <ul>
                                <li>
                                    <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
                                </li>
                                <li>
                                    <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
                                </li>
                                <li>
                                    <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>Portfolio</a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                                </li>
                            </ul>
                            <h3>oussamafnh &copy; 2024</h3>
                        </div>
                    </label>

                </div>
            </div>

        </div>
    )
}
export default Navbarx