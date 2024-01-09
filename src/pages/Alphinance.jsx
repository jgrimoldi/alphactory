import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import { ButtonGroup, ContactForm, EntityMap, PriceCard, modules } from '../components/Alphinance';
import { Container, FormSection, InfoSection } from '../components/Interface';
import { Anchor } from '../components/Inputs';
import { Dashboard } from '../assets/Images';
import { useIntersection } from '../hooks/useIntersection';

export default function Alphinance () {
  const { t } = useTranslation();
  const priceOptions = ['monthly', 'yearly'];
  const [priceOption, setPriceOption] = useState('monthly');

  const productOptions = ['acquire', 'support'];
  const [productOption, setProductOption] = useState('acquire');

  const [entityRef, isIntersecting] = useIntersection();

  return (
    <>
      <Helmet>
        <title>Alphactory | Alphinance</title>
        <link rel='canonical' href={window.location.href} />
        <meta property='og:title' content='Alphinance' />
        <meta property='og:description' content='"Our organization was created with the mission of facilitating daily tasks in the corporate world. By automating operational tasks and seeking maximum efficiency by combining the accounting, administrative and financial sectors of the entities.' />
        <meta property='og:image' content='/Logo.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Alphinance' />
        <meta name='twitter:description' content='"Our organization was created with the mission of facilitating daily tasks in the corporate world. By automating operational tasks and seeking maximum efficiency by combining the accounting, administrative and financial sectors of the entities.' />
        <meta name='twitter:image' content='/Logo.png' />
      </Helmet>
      <main>
        <Container styles='flex lg:flex-row flex-col gap-5 justify-evenly items-center pt-9'>
          <div className='lg:w-2/5 w-full flex lg:justify-end justify-center'>
            <Header variant='blackText' className='2xl:!px-0 md:!px-0 !px-0  flex flex-col justify-center sm:items-start sm:gap-12 gap-6  lg:!max-w-[398px] !max-w-[600px] lg:text-left text-center'>
              <div className='text-left'>
                <span className='bg-ft-light-green text-ft-dark-green py-2 px-4 rounded-xl mt-5t animate-pulse cursor-pointer'>{`${t('new')}!`}</span>
                <h1 className='font-semibold sm:text-5xl text-3xl mt-2.5 lg:text-left text-center'>{t('alphinance.title')}</h1>
              </div>
              <h2 className='sm:text-base text-sm'>{t('alphinance.subtitle')}</h2>
              <div role='group' aria-label={t('moreInfo')} className='space-x-6'>
                <Anchor id='more' title='moreInfo' variant='underline' href='#modules' />
                <Anchor id='cta' title='contact' variant='greenButton' href='#module' />
              </div>
            </Header>
          </div>
          <picture className='lg:w-2/5 w-full flex justify-start'>
            <img src={Dashboard} alt='Our Dashboard' />
          </picture>
        </Container>
        <InfoSection variant='gray' title='alphinance.modules' subtitle='alphinance.modulesSubtitle'>
          <div className='w-fit mx-auto mb-8'>
            <ButtonGroup label='Price actions' options={priceOptions} selected={priceOption} setSelected={setPriceOption} />
          </div>
          <div id='modules' className='grid xl:grid-cols-4 sm:grid-cols-2  gap-5'>
            {modules.map((module, index) => <PriceCard key={index} info={module} frequency={priceOption} />)}
          </div>
        </InfoSection>
        <span ref={entityRef} className={`block opacity-0 ${isIntersecting ? 'animate-fade-and-slide' : ''}`}>
          <InfoSection variant='green' title='alphinance.entities' subtitle='alphinance.entitiesSubtitle'>
            <EntityMap />
          </InfoSection>
        </span>
        <FormSection variant='gray' title='contactUs' subtitle='alphinance.contactUsSubtitle'>
          <div className='2xl:w-fit mx-auto md:mb-10 mb-5'>
            <ButtonGroup label='Product actions' options={productOptions} selected={productOption} setSelected={setProductOption} />
          </div>
          <ContactForm />
        </FormSection>
      </main>
    </>
  );
}
