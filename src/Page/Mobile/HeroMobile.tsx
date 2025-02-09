"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { HeroHighlight } from "@/components/ui/hero-highlight"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import { useState, useEffect, Fragment } from "react"
import { AnimatePresence } from "framer-motion"

const HeroMobile = () => {
    const [currentSlogan, setCurrentSlogan] = useState(0)
    const { t } = useTranslation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlogan((prev) => (prev + 1) % heroTexts.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const socialLinks = [
        { icon: <FiLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/oussama-fannah/" },
        { icon: <FiGithub />, name: "GitHub", url: "https://github.com/oussamafnh" },
        { icon: <FaXTwitter />, name: "Twitter", url: "https://x.com/OTFnnh" },
        { icon: <FiInstagram />, name: "Instagram", url: "https://www.instagram.com/oussama.fnh/" },
    ]

    const heroTexts = [t("hero.developer"), t("hero.passion"), t("hero.precision")]

    return (
        <HeroHighlight containerClassName="h-[85vh] w-[100vw] bg-white relative">
            <motion.div
                className="absolute bottom-[10vh] left-0 right-0 flex justify-center gap-6 z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
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


            <motion.div className="absolute top-6 left-0 w-screen overflow-hidden">
                <motion.div
                    className="flex items-center gap-4 whitespace-nowrap"
                    animate={{ x: ["0%", "-300%"] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="text-zinc-900 font-bold">2025</span>
                            <span className="text-zinc-900 text-sm font-bold">• OPEN TO WORK •</span>
                            <span className="text-zinc-900 font-bold">2025</span>
                            <span className="text-zinc-900 text-sm font-bold">• OPEN TO WORK •</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>


            <div className="h-full flex flex-col items-center justify-center px-4">
                <div className="text-center oussamafannah_hero">
                    <motion.h1
                        className="text-6xl font-bold text-lime-400 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        OUSSAMA
                        <motion.span
                            className="block mt-2 text-zinc-800 text-4xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            fannah
                        </motion.span>
                    </motion.h1>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        className="h-16 relative overflow-hidden"
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
                        <div className="text-lg font-mono text-zinc-800 text-center px-4">
                            {heroTexts[currentSlogan]}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-0 h-[10vh] w-full bg-[url('@/assets/imgs/trans.png')] bg-cover bg-center" />
        </HeroHighlight>
    )
}

export default HeroMobile