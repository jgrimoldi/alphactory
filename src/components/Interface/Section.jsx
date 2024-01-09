import Header from '../Header';
import { Container } from './index';
import { ImageCard4 } from '../../assets/Images';
import { useTranslation } from 'react-i18next';
import { useIntersection } from '../../hooks/useIntersection';

export function Section ({ backgroundColor, styles, children }) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <Container styles={styles}>
        {children}
      </Container>
    </section>
  );
}

export function FormSection ({ children, variant, title, subtitle }) {
  const { t } = useTranslation();
  const variants = {
    purple: { backgroundColor: 'bg-bg-purple', textColor: 'whiteText', titleColor: 'text-ft-purple' },
    gray: { backgroundColor: 'bg-ip-gray', textColor: 'blackText', titleColor: 'text-ft-green' }
  };

  const isArray = Array.isArray(children);

  return (
    <Section backgroundColor={variants[variant].backgroundColor} styles='flex md:flex-row flex-col 2xl:gap-7 gap-5 justify-center items-center py-2 2xl:py-3 2xl:px-[300px]'>
      <Header variant={variants[variant].textColor} className='2xl:w-[420px] 2xl:text-center md:w-[280px] md:text-left  md:!px-0'>
        <h2 className={`2xl:max-w-none md:max-w-[196px] max-w-none font-medium sm:text-5xl text-3xl md:mb-11 mb-6 text-stroke-black drop-shadow-sm ${variants[variant].titleColor}`}>{t(title)}</h2>
        {isArray && children[0]}
        <h3 className='2xl:max-w-none md:max-w-[258px] max-w-none font-normal text-base'>{t(subtitle)}</h3>
      </Header>
      {isArray ? children[1] : children}
    </Section>
  );
}

export function InfoSection ({ id, children, variant = 'blue', title, subtitle }) {
  const { t } = useTranslation();

  const variants = {
    blue: { backgroundColor: 'bg-bg-dark-blue', textColor: 'whiteText', titleColor: 'text-ft-purple', marginBottom: 'md:mb-[88px] mb-[44px]' },
    green: { backgroundColor: 'bg-ft-dark-green', textColor: 'whiteText', titleColor: 'text-ft-light-green', marginBottom: 'md:mb-[70px] mb-[35px]' },
    gray: { backgroundColor: 'bg-ip-gray', textColor: 'blackText', titleColor: 'text-bg-green', marginBottom: 'md:mb-8 mb-4' }
  };

  const isArray = Array.isArray(children);

  return (
    <Section backgroundColor={variants[variant].backgroundColor} styles='py-2'>
      <Header variant={variants[variant].textColor}>
        <h2 className={`font-semibold sm:text-4xl text-3xl mb-9 ${variants[variant].titleColor}`}>{t(title)}</h2>
        <h3 className={`max-w-[700px] mx-auto ${variants[variant].marginBottom}`}>{t(subtitle)}</h3>
        {isArray && children[0]}
      </Header>
      {isArray ? children[1] : children}
    </Section>
  );
}

export function ListSection ({ backgroundColor }) {
  const { t } = useTranslation();
  const [listRef, isIntersecting] = useIntersection({ treshold: 0.5, rootMargin: '200px' });
  const elements = [
    { title: 'alphactory.firstItemTitle', paragraph: 'alphactory.firstItemText' },
    { title: 'alphactory.thirdItemTitle', paragraph: 'alphactory.thirdItemText' },
    { title: 'alphactory.fourthtItemTitle', paragraph: 'alphactory.fourthtItemText' },
    { title: 'alphactory.secondItemTitle', paragraph: 'alphactory.secondItemText' }
  ];

  return (
    <Section backgroundColor={backgroundColor} styles='flex items-center justify-center lg:flex-nowrap flex-wrap-reverse sm:text-left text-center'>

      <picture ref={listRef} className={`lg:w-3/5 w-full opacity-0 ${isIntersecting ? 'animate-slide-rigth' : ''}`}>
        <img width={1051} height={675} src={ImageCard4} alt='Imagen de Metricas' loading='lazy' />
      </picture>

      <article className={`w-full lg:w-2/5 space-y-[42px] sm:pl-5 sm:pr-[50px] sm:mt-16 mb-10 opacity-0 ${isIntersecting ? 'animate-fade-in' : ''}`}>

        <header className='space-y-[42px]'>
          <h2 className='font-medium sm:text-5xl text-3xl'>{t('alphactory.titleAlphinance')}</h2>
          <h3 className='text-base'>{t('alphactory.subtitleAlphinance')}</h3>
        </header>

        <ol className='grid grid-cols-1 min-[420px]:grid-cols-2 gap-y-[38px] gap-x-[20px] sm:text-xl text-lg font-medium'>
          {elements.map(({ title, paragraph }, index) => (
            <li key={index}>
              <h4 className='sm:text-base text-sm font-bold'>{t(title)}</h4>
              <p className='sm:text-base text-sm font-normal'>{t(paragraph)}</p>
            </li>
          ))}
        </ol>

      </article>

    </Section>
  );
}
