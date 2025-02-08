import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import i18n from '../i18n';
import { FaNodeJs, FaJs, FaReact, FaPhp, FaLaravel, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const techIcons = {
    "Node.js": <FaNodeJs className="w-5 h-5 text-green-500" />,
    "JavaScript": <FaJs className="w-5 h-5 text-yellow-500" />,
    "React": <FaReact className="w-5 h-5 text-blue-500" />,
    "PHP": <FaPhp className="w-5 h-5 text-indigo-500" />,
    "Laravel": <FaLaravel className="w-5 h-5 text-red-500" />,
    "MongoDB": <SiMongodb className="w-5 h-5 text-green-600" />,
    "Express.js": <SiExpress className="w-5 h-5 text-gray-500" />,
};

const Portfolio = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsContainerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    const projects = [
        {
            title: 'E-BookOasis',
            descriptions: {
                en: 'An online platform for exploring and sharing eBooks.',
                fr: 'Une plateforme en ligne pour explorer et partager des eBooks.',
            },
            image: 'https://camo.githubusercontent.com/64f72ab9c647e00a2852e633c5051e95faa8d39127d16b23e81e2533f4e24eac/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6471376b6a647338732f696d6167652f75706c6f61642f76313639393338313534312f7339386f747636656c6e686d706f74306a68656c2e6a7067',
            demoLink: '',
            projectLink: 'https://github.com/oussamafnh/Ebookoasis?tab=readme-ov-file',
            technologies: ["PHP", "Laravel"],
        },
        {
            title: 'LOOPIFYX',
            descriptions: {
                en: 'A web application that provides JavaScript code patterns for creating various star patterns.',
                fr: 'Une application web qui fournit des modèles de code JavaScript pour créer divers motifs d\'étoiles.',
            },
            image: 'https://res.cloudinary.com/dq7kjds8s/image/upload/v1738975779/qibm57sq7lh59oxgboh6.png',
            demoLink: 'https://oussamafnh.github.io/Loopifyx/',
            projectLink: 'https://github.com/oussamafnh/Loopifyx',
            technologies: ["Node.js", "JavaScript", "React"],
        },
        {
            title: 'FannahTechStore',
            descriptions: {
                en: 'A web application designed to facilitate the sale of electronic products online.',
                fr: 'Une application web conçue pour faciliter la vente de produits électroniques en ligne.',
            },
            image: 'https://res.cloudinary.com/dq7kjds8s/image/upload/v1727121033/xvqvtrgpwh3vhyvwz18r.png',
            demoLink: '',
            projectLink: 'https://github.com/oussamafnh/fannahtechstore',
            technologies: ["PHP", "Laravel", "JavaScript"],
        },
        {
            title: 'CASADEV',
            descriptions: {
                en: 'A social media platform for developers to share ideas, connect, and collaborate on projects.',
                fr: 'Une plateforme de médias sociaux pour les développeurs, permettant de partager des idées, se connecter et collaborer sur des projets.',
            },
            image: 'https://res.cloudinary.com/dq7kjds8s/image/upload/v1738900148/wg9pr54agl8qrkuresx3.png',
            demoLink: 'https://casadev.vercel.app',
            projectLink: 'https://github.com/oussamafnh/CASADEV',
            technologies: ["Node.js", "Express.js", "MongoDB", "React"],
        }
    ];


    useEffect(() => {
        const updateDimensions = () => {
            if (projectsContainerRef.current && containerRef.current) {
                const viewportWidth = window.innerWidth;
                const projectWidth = viewportWidth * 0.8; // 80vw
                const gap = viewportWidth * 0.15; // 15vw

                // Calculate total width including all projects and gaps
                const totalWidth = (projectWidth + gap) * projects.length;
                // Account for the initial left padding and viewport width
                const scrollableWidth = totalWidth - viewportWidth + (viewportWidth * 0.2);

                setScrollRange(scrollableWidth);
                containerRef.current.style.height = `${projects.length * 100}vh`;
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);




    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <motion.div
            ref={containerRef}
            id="portfolio"
            className="relative bg-zinc-950 min-h-screen"
        >

            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-8 left-[10vw] z-50"
                >
                    <h2 className="text-2xl font-bold text-lime-400  transition-colors duration-300">
                        PORTFOLIO
                    </h2>
                </motion.div>
                <motion.div
                    ref={projectsContainerRef}
                    style={{ x, gap: '20vw' }}
                    className="flex pl-[10vw] h-screen items-center"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="w-[80vw] h-[70vh] flex-shrink-0 rounded-3xl bg-zinc-950/50 backdrop-blur-xl border border-slate-700/50 overflow-hidden shadow-2xl"
                        >
                            <div className="h-full flex flex-col md:flex-row">
                                <div className="flex-1 p-8 flex flex-col justify-between border-r border-slate-700/50">
                                    <div>
                                        <h2 className="text-4xl font-bold text-lime-400 mb-6">
                                            {project.title}
                                        </h2>
                                        <p className="text-lg text-slate-300 max-w-md">
                                            {i18n.language === 'fr'
                                                ? project.descriptions.fr
                                                : project.descriptions.en}
                                        </p>
                                    </div>
                                    <div className="flex gap-4 mt-8">
                                        {project.technologies.map((tech, i) => (
                                            <motion.div
                                                key={i}
                                                className="p-3 rounded-xl bg-slate-700/50 border border-slate-600/50"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 10,
                                                    delay: i * 0.1
                                                }}
                                            >
                                                {techIcons[tech as keyof typeof techIcons]}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 relative group overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 right-6 flex items-center gap-2">
                                        {project.demoLink && (
                                            <motion.a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-full bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/30 backdrop-blur-sm text-lime-400 transition-all flex items-center gap-2"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4" />
                                                <span>Demo</span>
                                            </motion.a>
                                        )}
                                        <motion.a
                                            href={project.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-full bg-gray-600/10 hover:bg-gray-600/20 border border-gray-600/30 backdrop-blur-sm text-gray-300 transition-all flex items-center gap-2"
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>GitHub</span>
                                        </motion.a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </motion.div>
            </div >
        </motion.div >
    );
};



export default Portfolio;