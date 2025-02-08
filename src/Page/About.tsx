import { useRef } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import img from "@/assets/imgs/img.jpg";
import { TechIcons } from "./TechIcons";
const About = () => {
    const { t } = useTranslation();
    const ref = useRef(null);


    return (
        <motion.section 
            ref={ref}
            id="about"
            className="relative h-[110vh] bg-zinc-950 overflow-hidden w-[100vw] px-[10vw] "
        >

            <div className="container mx-auto py-24 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        className="relative group"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            src={img}
                            alt="Profile"
                            className="w-full h-auto rounded-2xl shadow-2xl z-20 relative transform group-hover:opacity-100 transition-all duration-500"
                        />
                    </motion.div>

                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.p 
                            className="text-lime-400 text-2xl font-bold"
                            whileHover={{ x: 10 }}
                        >
                            {t('about.title')}
                        </motion.p>

                        <motion.div className="space-y-6">
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                {t('about.intro')}
                            </p>
                            <p className="text-zinc-400 italic">
                                {t('about.secondLine')}
                            </p>
                        </motion.div>
                        <div className="relative">
                            <TechIcons />
                        </div>
                        <div className="flex flex-wrap gap-6 mt-12">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/30 rounded-xl px-8 py-4 flex items-center gap-4 backdrop-blur-sm transition-all"
                                href={i18n.language === 'fr' ? 
                                    'https://drive.google.com/file/d/1BwjRyodw-g8o0UftGUbEAETPvkIroUw4/view' : 
                                    'https://drive.google.com/file/d/1GJgy2_Mlwfe2RjDMkB3MDoWx184yX45g/view'}
                                target="_blank"
                                rel="noopener"
                            >
                                <span className="text-lime-400 font-medium">
                                    {t('about.resume')}
                                </span>
                                <div className="w-6 h-6  flex items-center justify-center">
                                    <svg className="w-4 h-4 text-lime-400" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2ZM12,2a1,1,0,0,0-1,1V14.586L8.707,12.293a1,1,0,1,0-1.414,1.414l4,4a1,1,0,0,0,.325.216.986.986,0,0,0,.764,0,1,1,0,0,0,.325-.216l4-4a1,1,0,0,0-1.414-1.414L13,14.586V3A1,1,0,0,0,12,2Z" />
                                    </svg>
                                </div>
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 rounded-xl px-8 py-4 flex items-center gap-4 backdrop-blur-sm transition-all"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span className="text-zinc-300 font-medium">
                                    {t('about.contact')}
                                </span>
                                <div className="w-6 h-6  flex items-center justify-center">
                                    <svg className="w-4 h-4 text-zinc-300" viewBox="0 0 1920 1920">
                                        <path fill="currentColor" d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" />
                                    </svg>
                                </div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default About;