import React from 'react';
import Card from './Card';
import Node from '../assets/svgs/languages/node';
import Js from '../assets/svgs/languages/js';
import Reactjs from '../assets/svgs/languages/react';
import Php from '../assets/svgs/languages/php';
import Laravel from '../assets/svgs/languages/laravel';
import Css from '../assets/svgs/languages/css';
import '../style/porfolio.css';


const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-BookOasis',
      description: 'an online platform for exploring and sharing eBooks.',
      image: 'https://camo.githubusercontent.com/64f72ab9c647e00a2852e633c5051e95faa8d39127d16b23e81e2533f4e24eac/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6471376b6a647338732f696d6167652f75706c6f61642f76313639393338313534312f7339386f747636656c6e686d706f74306a68656c2e6a7067',
      projectLink: 'https://github.com/oussamafnh/Ebookoasis?tab=readme-ov-file',
      technologies: [<Php />, <Laravel />, <Css />],
    },
    {
      title: 'LOOPIFYX',
      description: 'A web application that provides JavaScript code patterns for creating various star patterns',
      image: 'https://private-user-images.githubusercontent.com/96582842/367901696-d9a926cc-a01f-442c-8270-1abd3b9d7828.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY1MTUyMTgsIm5iZiI6MTcyNjUxNDkxOCwicGF0aCI6Ii85NjU4Mjg0Mi8zNjc5MDE2OTYtZDlhOTI2Y2MtYTAxZi00NDJjLTgyNzAtMWFiZDNiOWQ3ODI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE2VDE5MjgzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5NGQ2YmQ1MjU2NmQ0NmU4N2I2OTg2Zjk5MzMyOTRjZDU2OGJmZjIwZDViNTM4ZGY1MjE4MTBkMTkwZmVhNDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3St8Wl-g3UqnscCFafZxX_qK7HIciQ4tnofbmQP13fE',
      projectLink: 'https://github.com/oussamafnh/Loopifyx',
      technologies: [<Node />, <Js />, <Reactjs />],
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
