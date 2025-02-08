import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaNodeJs, FaJs, FaReact, FaPhp, FaLaravel, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import projects from '@/assets/projects.json';
import i18n from '@/i18n';

const techIcons = {
    "Node.js": <FaNodeJs className="w-5 h-5 text-green-500" />,
    "JavaScript": <FaJs className="w-5 h-5 text-yellow-500" />,
    "React": <FaReact className="w-5 h-5 text-blue-500" />,
    "PHP": <FaPhp className="w-5 h-5 text-indigo-500" />,
    "Laravel": <FaLaravel className="w-5 h-5 text-red-500" />,
    "MongoDB": <SiMongodb className="w-5 h-5 text-green-600" />,
    "Express.js": <SiExpress className="w-5 h-5 text-gray-500" />,
};

const PortfolioMobile = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isMobile) return null;

    return (
        <div id="portfolio" className="relative bg-zinc-950 h-auto py-12 px-[10vw] ">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h2 className="text-2xl font-bold text-lime-400">{t('PORTFOLIO')}</h2>
            </motion.div>

            <div className="flex flex-col space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="rounded-xl bg-zinc-900/50 border border-slate-700/50 overflow-hidden"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 right-3 flex gap-2">
                                {project.demoLink && (
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        className="px-3 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-sm flex items-center gap-1.5"
                                    >
                                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                        {t('Demo')}
                                    </motion.a>
                                )}
                                <motion.a
                                    href={project.projectLink}
                                    target="_blank"
                                    className="px-3 py-1.5 rounded-full bg-gray-600/10 border border-gray-600/30 text-gray-300 text-sm flex items-center gap-1.5"
                                >
                                    <FaGithub className="w-3.5 h-3.5" />
                                    {t('GitHub')}
                                </motion.a>
                            </div>
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-bold text-lime-400 mb-3">{project.title}</h3>
                            <p className="text-slate-300 mb-4 text-sm">
                                {project.descriptions[i18n.language as keyof typeof project.descriptions]}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: i * 0.1 }}
                                    >
                                        {techIcons[tech as keyof typeof techIcons]}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioMobile;