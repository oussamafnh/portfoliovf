import { useTranslation } from 'react-i18next';
import '../style/langswitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>Eng</button>|
      <button onClick={() => changeLanguage('fr')}>Fr</button>
    </div>
  );
};

export default LanguageSwitcher;
