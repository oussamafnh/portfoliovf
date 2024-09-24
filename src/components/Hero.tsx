import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import '../style/hero.css';
import { Herosvg } from "../assets/svg"

const Hero = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);


    const nameVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 }
    };

    // Animation variants for rotating sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.4,  // Stagger each section's animation
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    // const h1Ref = useRef(null);
    // const h2Ref = useRef(null);

    // useEffect(() => {
    //     if (h1Ref.current && h2Ref.current) {
    //         const h1Element = h1Ref.current as HTMLElement;
    //         const h2Element = h2Ref.current as HTMLElement;
    //         const h1Width = h1Element.offsetWidth;
    //         h2Element.style.width = `${h1Width}px`;
    //     }
    // }, []);
    return (
        <motion.div className='hero-div' id='home' ref={ref} style={{opacity:scalP}}>
            <div className="hero">
            <motion.h1
                initial="hidden"
                animate="visible"
                variants={nameVariants}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <span className="highlight">OUSSAMA</span> FANNAH
            </motion.h1>

            <section className="animation">
                {['Junior Full Stack Developer', 'Coding with Passion', 'Building with Precision'].map((text, i) => (
                    <motion.div
                        key={i}
                        className={i === 0 ? 'first' : i === 1 ? 'second' : 'third'}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        variants={sectionVariants}
                    >
                        <div>{text}</div>
                    </motion.div>
                ))}
            </section>
            </div>

            <Herosvg />
        </motion.div>
    );
};

export default Hero;
