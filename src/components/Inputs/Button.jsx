import { useTranslation } from 'react-i18next';
import { Loading } from '../Interface/Icons';

export function Button ({ id, type = 'button', width, title, variant = 'purpleButton', handleClick = () => {}, isLoading = false }) {
  const { t } = useTranslation();
  const variants = {
    purpleButton: 'font-bold rounded-lg 2xl:text-lg text-sm px-5 py-2.5 mb-2 focus:ring-4 bg-ft-purple hover:bg-bg-purple focus:ring-bg-purple text-white active:bg-ft-dark-purple active:transform active:scale-90 transition-transform',
    darkButton: 'font-bold rounded-lg 2xl:text-lg text-sm px-5 py-2.5 mb-2 focus:ring-4 bg-ip-dark-blue hover:bg-bg-dark-blue focus:ring-bg-dark-blue text-white active:bg-ip-darker-blue active:transform active:scale-90 transition-transform',
    greenButton: 'font-bold rounded-lg 2xl:text-lg text-sm px-5 py-2.5 mb-2 focus:ring-4 bg-bg-green hover:bg-ft-light-green hover:text-bg-green focus:ring-bg-green text-ft-light-green active:bg-ft-dark-green active:transform active:scale-90 transition-transform',
    greenButtonS: 'font-bold rounded-lg 2xl:text-lg text-sm px-5 py-2.5 mb-2 focus:ring-4 bg-ip-green hover:bg-ft-light-green hover:text-ip-green focus:ring-bg-green text-ft-light-green active:bg-ip-dark-green active:transform active:scale-90 transition-transform',
    underline: 'text-ft-dark-green font-semibold text-sm underline'
  };

  return (
    <button
      id={id}
      style={{ width }}
      type={type}
      onClick={handleClick}
      disabled={isLoading}
      className={`self-end focus:outline-none ${variants[variant]} ${isLoading ? 'pointer-events-none !bg-bg-dark-gray' : ''}`}
    >
      {isLoading ? <span className={`flex gap-2 items-center  ${isLoading ? 'text-ft-muted' : ''}`}><span className='animate-spin'><Loading /></span> {t('sending')}</span> : t(title)}
    </button>
  );
}
