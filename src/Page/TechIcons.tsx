import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiReact,
  SiVite,
  SiNodedotjs,
  SiDocker,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiGit
} from "react-icons/si";

export const TechIcons = () => {
    const icons = [
        { component: <SiJavascript />, name: "JavaScript" },
        { component: <SiReact />, name: "React" },
        { component: <SiVite />, name: "Vite" },
        { component: <SiNodedotjs />, name: "Node.js" },
        { component: <SiDocker />, name: "Docker" },
        { component: <SiPhp />, name: "PHP" },
        { component: <SiLaravel />, name: "Laravel" },
        { component: <SiMysql />, name: "MySQL" },
        { component: <SiMongodb />, name: "MongoDB" },
        { component: <SiGit />, name: "Git" }
    ];

    return (
        <div className="flex flex-wrap gap-4">
            {icons.map((icon, index) => (
                <motion.div
                    key={icon.name}
                    className="p-4 bg-zinc-800/50 rounded-lg backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center" 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="w-7 h-7 text-lime-400 flex items-center justify-center">
                        {icon.component}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};