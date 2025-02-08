"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const { t } = useTranslation()

  const socialLinks = [
    { icon: <FiLinkedin />, name: "LinkedIn", url: "#" },
    { icon: <FiGithub />, name: "GitHub", url: "#" },
    { icon: <FaXTwitter />, name: "Twitter", url: "#" },
    { icon: <FiInstagram />, name: "Instagram", url: "#" },
  ]

  const heroTexts = [t("hero.developer"), t("hero.passion"), t("hero.precision")]

  return (
    <HeroHighlight containerClassName="h-[120vh] w-[100vw] bg-white relative">


      <motion.div
        className="absolute left-6 top-5 flex flex-col gap-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className="relative flex items-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl text-zinc-900 transition-colors">
              {link.icon}
            </span>
          </motion.a>
        ))}
      </motion.div>




      <motion.div
        className="absolute right-6 top-6 w-28 h-28 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fill="currentColor" className="text-zinc-900 text-[10px] font-bold tracking-[0.25em]">
            <textPath href="#circle" startOffset="0%" textLength="235%">
              • OPEN TO WORK •• OPEN TO WORK •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-zinc-900 font-bold text-base">2025</div>
      </motion.div>
      <div className="h-full flex flex-col items-center justify-center">
        {/* Centered Name */}
        <div className="text-center">
          <motion.h1
            className=" oussamafannah_hero text-7xl md:text-9xl font-bold text-lime-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OUSSAMA
            <motion.span
              className="block mt-4 text-zinc-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              fannah
            </motion.span>
          </motion.h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            className="subtitles animation h-20 relative overflow-hidden"
            key={currentSlogan}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
              exit: { y: -40, opacity: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xl md:text-2xl font-mono text-zinc-800 text-center">
              {heroTexts[currentSlogan]}
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="absolute -mt-[20vh] h-[20vh] w-[100vw] bg-[url('@/assets/imgs/trans.png')] bg-cover bg-center" />
    </HeroHighlight>
  )
}

export default Hero

