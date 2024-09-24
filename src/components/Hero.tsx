import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import '../style/hero.css';
import { Herosvg } from "../assets/svg"
import { useTranslation } from 'react-i18next';

const Hero = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);

    // Variants for the name
    const nameVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 }
    };

    // Variants for the texts in animation section
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.4, // Stagger effect
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    // Variants for the entire animation section
    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.5, // Delay before starting child animations
                staggerChildren: 0.3 // Stagger each child's animation by 0.3 seconds
            }
        }
    };

    const { t } = useTranslation();

    // Translated texts
    const heroTexts = [
        t('hero.developer'),
        t('hero.passion'),
        t('hero.precision')
    ];

    return (
        <motion.div className='hero-div' id='home' ref={ref} style={{ opacity: scalP }}>
            <div className="hero">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={nameVariants}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <span className="highlight">OUSSAMA</span> FANNAH
                </motion.h1>

                {/* Animation section */}
                <motion.section
                    className="animation"
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants} // Apply the animation variants to this section
                >
                    {heroTexts.map((text, i) => (
                        <motion.div
                            key={i}
                            className={i === 0 ? 'first' : i === 1 ? 'second' : 'third'}
                            custom={i}
                            variants={sectionVariants}
                        >
                            <div className='subtext'>{text}</div>
                        </motion.div>
                    ))}
                </motion.section>
            </div>

            <Herosvg />
        </motion.div>
    );
};

export default Hero;
