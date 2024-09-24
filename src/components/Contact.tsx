import  { useState } from "react";
import { useForm } from '@formspree/react';
import '../style/contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();
    const [,handleSubmit] = useForm('mrgwbejg');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => {
        setIsSuccess(true);
        const form = document.getElementById("form-container") as HTMLFormElement; // Cast to HTMLFormElement
        form.reset();
        setTimeout(() => {
            setIsSuccess(false);
        }, 4000);
    };

    return (
        <>
            <div className="sec3" id="contact">
                <div className="title">
                    <p>{t('contact.bigtitle')}</p>
                </div>
                <div className="content">
                    <div className="leftside">
                        <form className="form-container" id="form-container" onSubmit={(e) => { handleSubmit(e); handleSuccess(); }}>

                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.name')}</label>
                                    <input
                                        required
                                        name="name"
                                        id="name"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.email')}</label>
                                    <input
                                        required
                                        name="email"
                                        id="email"
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.message')}</label>
                                    <textarea
                                        required
                                        cols={50}
                                        rows={10}
                                        id="message"
                                        name="message"
                                    />
                                </div>
                                {isSuccess ? (
                                    <div className="succeededmsg">
                                        <p>{t('contact.messagesuccess')}</p>
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className="form-submit-btn"
                                    >
                                        {t('contact.submit')}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="rightside">
                        <div className="contactinfos">

                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg><p> oussamafannah4@gmail.com</p> </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="phone"><g data-name="Layer 2"><g data-name="phone-call"><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"></path><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"></path></g></g></svg><p> +212 687953709</p> </div>

                        </div>

                        <div className="social">

                            <p>{t('contact.social')}</p>

                        </div>

                    </div>
                </div>




                <div className='GitHub-div'>
                    <ul className="GitHub">
                        <li className="icon-content">
                            <a
                                href="https://github.com/oussamafnh"
                                aria-label="GitHub"
                                data-social="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="filled"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-github"
                                    viewBox="0 0 16 16"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </a>
                            <div className="tooltip">GitHub</div>
                        </li>
                    </ul>
                </div>




            </div>
        </>
    );
};export default Contact;
