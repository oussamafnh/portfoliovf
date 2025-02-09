import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LightLogo } from "@/assets/logo";
import { LanguageSwitcher } from "../LanguageSwitcher";

const NavbarMobile = () => {
  const { t } = useTranslation();
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "homeMobile", label: "navbar.home" },
    { id: "aboutMobile", label: "navbar.about" },
    { id: "portfolioMobile", label: "navbar.portfolio" },
    { id: "contactMobile", label: "navbar.contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-[3vh] w-[80vw] ml-[10vw] bg-white/100 border border-gray-300 z-50 h-16 flex items-center rounded-[10px]"    >
      <div className="w-full px-4 md:px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center"
        >
          <LightLogo />
        </motion.div>
        <div className="md:hidden mr-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-0"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] border-0 [&_[data-radix-sheet-close]]:focus:outline-none"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 pt-8 space-y-6">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className="w-full"
                    >
                      <button
                        onClick={() => {
                          handleScrollToSection(item.id);
                        }}
                        className="text-xl relative px-6 py-4 group focus:outline-none border-none bg-transparent"
                      >
                        <motion.span
                          className="relative z-10"
                          initial={{ color: "#000000" }}
                          whileHover={{
                            color: "#a3e635",
                            textShadow: "0 0 15px rgba(163, 230, 53, 0.4)",
                            transition: {
                              color: { duration: 0.2 },
                              textShadow: { duration: 0.3 }
                            }
                          }}
                          whileTap={{ color: "#84cc16" }}
                        >
                          {t(item.label)}
                          <motion.div
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-lime-500"
                            initial={{ scaleX: 0 }}
                            whileHover={{
                              scaleX: 1,
                              transition: { type: "spring", stiffness: 300 }
                            }}
                          />
                        </motion.span>

                        <motion.div
                          className="absolute inset-0 blur-md bg-lime-200/50"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileHover={{
                            opacity: 0.8,
                            scale: 1,
                            transition: { duration: 0.3 }
                          }}
                        />
                      </button>
                    </motion.div>
                  ))}
                </div>
                <div className="pb-8 px-6">
                  <LanguageSwitcher />
                  <div className="mt-6 text-sm text-muted-foreground">
                    <p className="text-lg">oussamafannah4@gmail.com</p>
                  </div>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <p className="text-lg">+212 687953709</p>
                  </div>
                  <div className="mt-6 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} oussamafnh
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>


        <div className="hidden md:flex items-center gap-4 mr-4">
          <ul className="flex items-center gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <button
                    onClick={() => {
                      handleScrollToSection(item.id);
                    }}
                    className="text-xl relative px-6 py-4 group focus:outline-none border-none bg-transparent"
                  >
                    <motion.span
                      className="relative z-10"
                      initial={{ color: "#000000" }}
                      whileHover={{
                        color: "#a3e635", 
                        textShadow: "0 0 15px rgba(163, 230, 53, 0.4)",
                        transition: {
                          color: { duration: 0.2 },
                          textShadow: { duration: 0.3 }
                        }
                      }}
                      whileTap={{ color: "#84cc16" }} 
                    >
                      {t(item.label)}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-lime-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{
                          scaleX: 1,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      />
                    </motion.span>

                    <motion.div
                      className="absolute inset-0 blur-md bg-lime-200/50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileHover={{
                        opacity: 0.8,
                        scale: 1,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </button>
                </motion.div>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarMobile;