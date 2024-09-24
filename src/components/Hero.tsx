import { useEffect, useRef } from 'react';
import '../style/hero.css';
import { Herosvg } from "../assets/svg"

const Hero = () => {
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);

    useEffect(() => {
        if (h1Ref.current && h2Ref.current) {
            const h1Element = h1Ref.current as HTMLElement;
            const h2Element = h2Ref.current as HTMLElement;
            const h1Width = h1Element.offsetWidth;
            h2Element.style.width = `${h1Width}px`;
        }
    }, []);
    return (
        <div className='hero-div' id='home'>
            <div className="hero">
                <h1 ref={h1Ref}>
                    <span className="highlight">OUSSAMA</span> FANNAH
                </h1>
                <section className="animation">
                    <div className="first"><div>Junior Full Stack Developer</div></div>
                    <div className="second"><div>Coding with Passion</div></div>
                    <div className="third"><div>Building with Precision</div></div>
                </section>
            </div>
            
            <Herosvg />
        </div>
    );
};

export default Hero;
