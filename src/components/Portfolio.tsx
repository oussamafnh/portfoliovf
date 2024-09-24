import React from 'react';
import Card from './Card';
import Node from '../assets/svgs/languages/node';
import Js from '../assets/svgs/languages/js';
import Reactjs from '../assets/svgs/languages/react';
import Php from '../assets/svgs/languages/php';
import Laravel from '../assets/svgs/languages/laravel';
import '../style/porfolio.css';


const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-BookOasis',
      description: 'an online platform for exploring and sharing eBooks.',
      image: 'https://camo.githubusercontent.com/64f72ab9c647e00a2852e633c5051e95faa8d39127d16b23e81e2533f4e24eac/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6471376b6a647338732f696d6167652f75706c6f61642f76313639393338313534312f7339386f747636656c6e686d706f74306a68656c2e6a7067',
      projectLink: 'https://github.com/oussamafnh/Ebookoasis?tab=readme-ov-file',
      technologies: [<Php />, <Laravel />],
    },
    {
      title: 'LOOPIFYX',
      description: 'A web application that provides JavaScript code patterns for creating various star patterns',
      image: 'https://res.cloudinary.com/dq7kjds8s/image/upload/v1727121647/cfruk7fmjzwbgrf2zks0.png',
      projectLink: 'https://github.com/oussamafnh/Loopifyx',
      technologies: [<Node />, <Js />, <Reactjs /> ],
    },
    {
      title: 'FannahTechStore',
      description: 'A web application designed to facilitate the sale of electronic products online. ',
      image: 'https://res.cloudinary.com/dq7kjds8s/image/upload/v1727121033/xvqvtrgpwh3vhyvwz18r.png',
      projectLink: 'https://github.com/oussamafnh/fannahtechstore',
      technologies: [<Php />, <Laravel />, <Js />],
    }
  ];

  return (
    <div className="portfolio" id='portfolio'>
      <div className="title">
        <p>Portfolio </p>
      </div>
      <div className="cards">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            projectLink={project.projectLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
