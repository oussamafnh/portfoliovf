import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import "../style/About.css";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import Mongodb from '../assets/svgs/languages/mongodb';
import Node from '../assets/svgs/languages/node';
import Php from '../assets/svgs/languages/php';
import Mysql from '../assets/svgs/languages/mysql';
import Js from '../assets/svgs/languages/js';
import Reactjs from '../assets/svgs/languages/react';
import Laravel from "../assets/svgs/languages/laravel";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const About = () => {
    const isMobile = window.innerWidth < 768;

    const { t } = useTranslation();

    const ref2 = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["100vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);


    const nameVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    };


    const scrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="aboutabout">

            <motion.div className="aboutdiv" id='about' ref={ref2}
            style={isMobile ? { opacity: 1 } : { opacity: scalP }}
            >
                <motion.div className="sec-title" initial="hidden"
                    animate="visible"
                    variants={nameVariants}
                    transition={{ duration: 1, ease: 'easeOut' }}>
                    <p>{t('about.bigtitle')}</p>
                </motion.div>

                <div className="about">
                    <div className="leftside">
                        <img src={img1} className="profile" alt="Profile" />
                        <img src={img2} className="profile-hover" alt="Profile-Hover" />
                    </div>

                    <div className="rightside">
                        <p className="title">{t('about.title')}</p>
                        <p className="stline" dangerouslySetInnerHTML={{ __html: t('about.intro') }}></p>
                        <p className="ndline">{t('about.secondLine')}</p>

                        <div className="skills">
                            <p className="title">{t('about.skillsTitle')}</p>
                            <div className="skills-icons">
                                <p className='stline'>JavaScript <Js /> , React <Reactjs /> , Node.js <Node /> , Php <Php /> , Laravel <Laravel /> ,  , mySQL <Mysql /> , MongoDB <Mongodb /> , etc...</p>
                            </div>
                        </div>


                        <div className="buttons">
                            <button
                                className="noselect noselect1"
                                onClick={() => {i18n.language === 'fr' ? window.open('https://drive.google.com/file/d/1HIZ98ang-7QzjtR9YpCPfJjC4XnlSfR5/view?usp=drive_link', '_blank') : window.open('https://drive.google.com/file/d/1vrkEPD6LPOB3Un3f5eE0tb1KHrwKvIwR/view?usp=drive_link', '_blank')}}

>
                                <span className="text">{t('about.resume')}</span>
                                <span className="icon">
                                    <svg
                                        fill="#000000"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2ZM12,2a1,1,0,0,0-1,1V14.586L8.707,12.293a1,1,0,1,0-1.414,1.414l4,4a1,1,0,0,0,.325.216.986.986,0,0,0,.764,0,1,1,0,0,0,.325-.216l4-4a1,1,0,0,0-1.414-1.414L13,14.586V3A1,1,0,0,0,12,2Z" />
                                    </svg>
                                </span>
                            </button>

                            <button className="noselect noselect2" onClick={() => scrollToSection('#contact')}>
                                <span className="text">{t('about.contact')}</span>
                                <span className="icon">
                                    <svg fill="#000000" width="30" height="30" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;
