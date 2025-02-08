import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300);
    
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / scrollHeight) * 100;
    setScrollProgress(100 - progress);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      <div className="relative w-16 h-16" onClick={scrollToTop}>
        {/* Progress Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="30"
            cy="30"
            r="28"
            className="stroke-current text-zinc-600"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="30"
            cy="30"
            r="28"
            className="stroke-current text-lime-400"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="175.929"
            strokeDashoffset={175.929 * (scrollProgress / 100)}
          />
        </svg>

        {/* Arrow Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <FiArrowUp className="w-6 h-6 text-lime-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
