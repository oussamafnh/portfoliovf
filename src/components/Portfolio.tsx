import React, { useRef, useEffect, useState } from 'react';
import Card from './Card';
import Node from '../assets/svgs/languages/node';
import Js from '../assets/svgs/languages/js';
import Reactjs from '../assets/svgs/languages/react';
import Php from '../assets/svgs/languages/php';
import Laravel from '../assets/svgs/languages/laravel';
import Vue from '../assets/svgs/languages/vue';
import { motion, useScroll, useTransform } from "framer-motion";
import '../style//porfolio.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Mongodb from '../assets/svgs/languages/mongodb';
import Expressjs from '../assets/svgs/languages/expressjs';

const Portfolio: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  const { t } = useTranslation();


  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);



  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["350vh 0vh", "0vh 0vh"]
  });

  const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);

  const projects = [
    {
      title: 'E-BookOasis',
      descriptions: {
        en: 'An online platform for exploring and sharing eBooks.',
        fr: 'Une plateforme en ligne pour explorer et partager des eBooks.',
      },
      image: 'https://camo.githubusercontent.com/64f72ab9c647e00a2852e633c5051e95faa8d39127d16b23e81e2533f4e24eac/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6471376b6a647338732f696d6167652f75706c6f61642f76313639393338313534312f7339386f747636656c6e686d706f74306a68656c2e6a7067',
      demoLink:'',
      projectLink: 'https://github.com/oussamafnh/Ebookoasis?tab=readme-ov-file',
      technologies: [<Php />, <Laravel />],
    },
    {
      title: 'LOOPIFYX',
      descriptions: {
        en: 'A web application that provides JavaScript code patterns for creating various star patterns.',
        fr: 'Une application web qui fournit des modèles de code JavaScript pour créer divers motifs d\'étoiles.',
      },
      image: 'https://res.cloudinary.com/dq7kjds8s/video/upload/v1732108326/kqmq6zj9ukayuzmjke0g.mp4',
      demoLink:'https://oussamafnh.github.io/Loopifyx/',
      projectLink: 'https://github.com/oussamafnh/Loopifyx',
      technologies: [<Node />, <Js />, <Reactjs />],
    },
    {
      title: 'FannahTechStore',
      descriptions: {
        en: 'A web application designed to facilitate the sale of electronic products online.',
        fr: 'Une application web conçue pour faciliter la vente de produits électroniques en ligne.',
      },
      image: 'https://res.cloudinary.com/dq7kjds8s/image/upload/v1727121033/xvqvtrgpwh3vhyvwz18r.png',
      demoLink:'',
      projectLink: 'https://github.com/oussamafnh/fannahtechstore',
      technologies: [<Php />, <Laravel />, <Js />],
    },
    {
      title: 'CASADEV',
      descriptions: {
        en: 'A social media platform for developers to share ideas, connect, and collaborate on projects.',
        fr: 'Une plateforme de médias sociaux pour les développeurs, permettant de partager des idées, se connecter et collaborer sur des projets.',
      },
      image: 'https://res.cloudinary.com/dq7kjds8s/video/upload/v1732109140/zqsplbkskwdksllgjxsu.mp4',
      demoLink:'https://casadev.vercel.app',
      projectLink: 'https://github.com/oussamafnh/CASADEV', 
      technologies: [<Node />, <Expressjs />, <Mongodb />, <Reactjs />],
    },
    {
      title: "Weather-Extension",
      descriptions: {
        en: "A browser extension that provides real-time weather updates with stunning city backgrounds. Available for Chrome, Firefox, and Safari.",
        fr: "Une extension de navigateur qui fournit des mises à jour météo en temps réel avec des arrière-plans de villes magnifiques. Disponible pour Chrome, Firefox et Safari."
      },
      image: "https://res.cloudinary.com/dq7kjds8s/video/upload/v1732494623/huiueikmga1bukqmvhnf.mp4", 
      demoLink: "https://ofn-weather.vercel.app",
      projectLink: "https://github.com/oussamafnh/weather-extension",
      technologies: [<Vue/>, <Js />]
    }    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="portfolioportfolio">

      <motion.div className="portfolio" id='portfolio' ref={portfolioRef}
        style={isMobile ? { opacity: 1 } : { opacity: scalP }}
      >
        <div className="title">
          <p>{t('portfolio.bigtitle')} </p>
        </div>
        <div className="cards">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <Card
                title={project.title}
                description={i18n.language === 'fr' ? project.descriptions.fr : project.descriptions.en}
                image={project.image}
                demoLink={project.demoLink}
                projectLink={project.projectLink}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
