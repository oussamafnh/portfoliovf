import React from 'react';
import '../style/porfolio.css'

// Define the props type for the Card
interface CardProps {
    title: string;
    description: string;
    image: string;
    projectLink: string;
    technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, description, image, projectLink, technologies }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <p className='disc'>{description}</p>
                <div className='infos'>
                    <div className="card-technologies">
                        <ul>
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
