import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { SiteUnderConstruction } from '../assets/Images';

export default function UnderConstruction () {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Site Under Construction</title>
        <link rel='canonical' href={window.location.href} />
      </Helmet>
      <main className='w-full py-20 h-auto flex flex-col items-center justify-center gap-24'>
        <section className='-rotate-6 flex flex-col items-end'>
          <div className='bg-ip-purple py-4 px-10'>
            <h1 className='lg:text-8xl md:text-6xl text-xl  font-bold uppercase text-white'>{t('comingSoon')}</h1>
          </div>
          <div className='bg-ip-dark-blue py-2 px-5'>
            <h2 className='lg:text-xl md:text-base text-xs font-bold uppercase text-white '>{t('underConstruction')}</h2>
          </div>
        </section>
        <section className='sm:max-w-4xl max-w-[280px]'>
          <img width={896} height={501} className='lg:w-full m-auto mb-10' src={SiteUnderConstruction} alt='Site is Under Construction' />
          <p className='lg:text-2xl md:text-lg text-sm font-regular text-center'>{t('textConstruction')}</p>
        </section>
      </main>
    </>
  );
}
