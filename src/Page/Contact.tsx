import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm('mrgwbejg');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
    };

    return (
        <motion.section
            id="contact"
            className="h-[100vh] w-[100vw] px-[10vw]  bg-zinc-950 relative overflow-hidden"
        >
            <div className="container mx-auto  h-[95%] mb-[5%] relative z-10">
                <motion.div
                    className="mt-20 mb-10 text-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-6xl md:text-8xl font-bold text-lime-400 mb-4">
                        {t('contact.bigtitle')}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 h-[calc(100%-200px)]">
                    <motion.form
                        className="space-y-8"
                        onSubmit={(e) => { handleSubmit(e); handleSuccess(); }}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <div className="relative group">
                                <input
                                    required
                                    name="name"
                                    id="name"
                                    type="text"
                                    className="w-full bg-transparent border-2 border-zinc-600 focus:border-lime-400 px-6 py-4 text-zinc-300 focus:outline-none rounded-lg transition-all peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-4 px-2 text-zinc-500 peer-focus:text-lime-400 peer-placeholder-shown:translate-y-0 
                                    -translate-y-8 transition-all pointer-events-none bg-zinc-950 px-2"
                                >
                                    {t('contact.name')}
                                </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <input
                                    required
                                    name="email"
                                    id="email"
                                    type="email"
                                    className="w-full bg-transparent border-2 border-zinc-600 focus:border-lime-400 px-6 py-4 text-zinc-300 focus:outline-none rounded-lg transition-all peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-4 px-2 text-zinc-500 peer-focus:text-lime-400 peer-placeholder-shown:translate-y-0 
                                    -translate-y-8 transition-all pointer-events-none bg-zinc-950 px-2"
                                >
                                    {t('contact.email')}
                                </label>
                            </div>

                            {/* Message Textarea */}
                            <div className="relative group">
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    className="w-full bg-transparent border-2 border-zinc-600 focus:border-lime-400 px-6 py-4 text-zinc-300 focus:outline-none rounded-lg transition-all peer h-32 resize-none"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-4 px-2 text-zinc-500 peer-focus:text-lime-400 peer-placeholder-shown:translate-y-0 
                                    -translate-y-8 transition-all pointer-events-none bg-zinc-950 px-2"
                                >
                                    {t('contact.message')}
                                </label>
                            </div>
                        </div>

                        <button
                            className="w-full bg-lime-400/10 border border-lime-400/30 hover:border-lime-400 rounded-xl px-8 py-4 flex items-center justify-center gap-4 backdrop-blur-sm text-lime-400 font-medium"
                            type="submit"
                            disabled={state.submitting}
                        >
                            <FiSend className="text-xl" />
                            {t('contact.submit')}
                        </button>

                        {/* Success Message */}
                        {isSuccess && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-center p-4 bg-lime-400/10 rounded-xl border border-lime-400/30 text-lime-400"
                            >
                                ✅ {t('contact.messagesuccess')}
                            </motion.div>
                        )}
                    </motion.form>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        className="relative hidden md:block  mb-10"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="absolute bottom-0 right-0 space-y-8 w-full">
                            {/* Contact Details */}
                            <div className="space-y-6 border-l-2 border-zinc-700 pl-6">
                                <div className="flex items-center gap-4 text-lime-400">
                                    <FiMail className="text-2xl" />
                                    <p className="text-lg">oussamafannah4@gmail.com</p>
                                </div>

                                <div className="flex items-center gap-4 text-lime-400">
                                    <FiPhone className="text-2xl" />
                                    <p className="text-lg">+212 687953709</p>
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className="border-t border-zinc-700 pt-6">
                                <p className="text-zinc-500 text-right">
                                    2025 © Oussama Fannah
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Contact Info */}
                <div className="md:hidden mt-12 border-t border-zinc-700 pt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-lime-400 justify-center">
                            <FiMail className="text-xl" />
                            <p className="text-md">oussamafannah4@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-4 text-lime-400 justify-center">
                            <FiPhone className="text-xl" />
                            <p className="text-md">+212 687953709</p>
                        </div>
                    </div>
                    <p className="text-zinc-500 text-center mt-6">
                        2025 © Oussama Fannah
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;