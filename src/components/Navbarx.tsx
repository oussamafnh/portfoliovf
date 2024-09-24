import '../style/Navbarx.css'
import { LightLogo } from "../assets/logo";
import { motion } from 'framer-motion';

const Navbarx = () => {

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        event.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Animation variants for navbar
    const navVariants = {
        hidden: { opacity: 0, y: -50 }, // Start out of view (above)
        visible: { opacity: 1, y: 0 },  // Animate to its normal position
    };

    return (
        <motion.div
            className='navbarx'
            initial="hidden"
            animate="visible"
            variants={navVariants}
            transition={{ duration: 1, ease: "easeOut" }} // Customize transition
        >
            <div className="nav-container">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }} // Logo fades in after delay
                >
                    <LightLogo />
                </motion.div>
                <motion.div
                    className="desktop-menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
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
                </motion.div>
                <div className="mobile-menu">
                    <label className="popup" htmlFor="mobile-menu-checkbox">
                        <input type="checkbox" id="mobile-menu-checkbox" aria-label="Toggle mobile menu" />
                        <motion.div
                            className="circle"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        />
                        <motion.div
                            className="burger"
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </motion.div>
                        <motion.div
                            className="mobile-menu-links"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
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
                        </motion.div>
                    </label>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbarx;
