import React, { ReactNode } from 'react';
import '../style/porfolio.css';
import { useTranslation } from 'react-i18next';
import { Github } from '../assets/svgs/socials/github.jsx';
import { Globe } from '../assets/svgs/socials/globe.jsx';
interface CardProps {
    title: string;
    description: string;
    image: string;
    projectLink: string;
    demoLink: string;
    technologies: ReactNode[];
}

const Card: React.FC<CardProps> = ({ title, description, image, projectLink, demoLink, technologies }) => {
    const { t } = useTranslation();

    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="technologies">
                    {technologies.map((TechIcon, index) => (
                        <span key={index}>{TechIcon}</span>
                    ))}
                    {demoLink !== '' && (
                        <a className="demo" href={demoLink} target="_blank" rel="noopener noreferrer">
                            <Globe />
                        </a>
                    )}


                    <a className='repo' href={projectLink} target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Card;
