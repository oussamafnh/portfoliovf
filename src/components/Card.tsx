import React, { ReactNode } from 'react';
import '../style/porfolio.css';

// Define the props type for the Card
interface CardProps {
    title: string;
    description: string;
    image: string;
    projectLink: string;
    technologies: ReactNode[]; // Change this to accept JSX elements
}

const Card: React.FC<CardProps> = ({ title, description, image, projectLink, technologies }) => {
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
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
