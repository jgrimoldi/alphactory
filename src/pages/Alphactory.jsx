import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import Header from '../components/Header';
import { ContactForm, WithUs, ImagesBox } from '../components/Alphactory';
import { FormSection, InfoSection, ListSection } from '../components/Interface/Section';
import { useIntersection } from '../hooks/useIntersection';

export default function Alphactory () {
  const { t } = useTranslation();
  const [headerRef, isIntersecting] = useIntersection({});

  return (
    <>
      <Helmet>
        <title>Alphactory</title>
        <meta property='og:title' content='Alphactory' />
        <meta property='og:description' content='We are a leading digital solutions company in the asset management, capital markets and real-time accounting space.' />
        <meta property='og:image' content='/Logo.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Alphactory' />
        <meta name='twitter:description' content='We are a leading digital solutions company in the asset management, capital markets and real-time accounting space.' />
        <meta name='twitter:image' content='/Logo.png' />
      </Helmet>
      <main>
        <span ref={headerRef} className={`block opacity-0 ${isIntersecting ? 'animate-fade-and-slide' : ''}`}>
          <Header variant='blackText' className='sm:py-[50px] py-4'>
            <h1 className='2xl:text-6xl 2xl:max-w-[1080px] sm:text-5xl text-3xl font-semibold sm:mb-[34px] mb-[20px] max-w-[720px] mx-auto'>{t('alphactory.title')}</h1>
            <h2 className='max-w-[480px] mx-auto 2xl:text-xl 2xl:max-w-[720px]'>{t('alphactory.subtitle')}</h2>
          </Header>
          <ImagesBox />
        </span>
        <ListSection backgroundColor='bg-ip-gray' />
        <FormSection variant='purple' title='contactUs' subtitle='alphactory.contactUsSubtitle'>
          <ContactForm />
        </FormSection>
        <InfoSection variant='blue' title='alphactory.comeWorkWithUs' subtitle='alphactory.comeWorkWithUsSubtitle'>
          <WithUs />
        </InfoSection>
      </main>
    </>
  );
}
