import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languageMap } from '../../constants/LANGUAGES';

export function SwitchLanguage () {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    window.localStorage.setItem('i18nextAlph', newLanguage);
  };

  const styles = 'w-full h-auto md:max-h-10 max-h-7 transition-all duration-500 ease-in-out transform';

  return (
    <button className='relative overflow-hidden flex items-center justify-center' onClick={toggleLanguage}>
      <img width={50} height={50} className={`${styles} ${language === 'es' ? '-translate-x-0 opacity-0' : 'translate-x-full opacity-1'}`} src={languageMap.en.flag} alt={languageMap.en.label} />
      <img width={50} height={50} className={`${styles} ${language === 'en' ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-1'}`} src={languageMap.es.flag} alt={languageMap.es.label} />
    </button>
  );
}
