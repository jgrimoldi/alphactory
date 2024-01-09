import { Card, CardXL, Container } from '../Interface/index';
import { Anchor, Button } from '../Inputs/index';
import { PurpleInvestments, UserGroup } from '../Interface/Icons';

import { ImageCard1, ImageCard2, ImageCard3, ImagoTypeAlphinance, ImagoTypePy } from '../../assets/Images';
import { useTranslation } from 'react-i18next';

function LeftDash () {
  const { t } = useTranslation();
  return (
    <article className='w-full flex flex-col gap-5'>
      <picture>
        <img width={866} height={291} className='w-full max-h-[291px] rounded-xl object-cover' src={ImageCard1} alt='Imagen City' loading='lazy' />
      </picture>
      <div className='h-full flex min-[421px]:flex-nowrap flex-wrap justify-between gap-5'>
        <CardXL title='+500' subtitle={t('alphactory.signedUser')} icon={UserGroup}>
          {t('alphactory.signedUserText')}
        </CardXL>

        <CardXL variant='dark' title='' subtitle={t('alphactory.chartCard')}>
          <img width={367} height={280} src={ImageCard2} alt='Bar Chart: Increase in users' loading='lazy' />
        </CardXL>
      </div>
    </article>
  );
}

function RightDash () {
  const { t } = useTranslation();

  return (
    <article className='w-full flex flex-col justify-between gap-2.5'>

      <div className='flex flex-1 min-[421px]:flex-nowrap flex-wrap justify-between gap-5'>
        <div className='min-[421px]:w-1/2 w-full flex flex-col gap-2.5'>
          <Card alt='Alphinance' src={ImagoTypeAlphinance} width={174} height={33} />
          <Card alt='Py' src={ImagoTypePy} width={77} height={33} />
          <CardXL title='+50' subtitle={t('alphactory.instruments')} icon={PurpleInvestments}>
            {t('alphactory.instrumentsText')}
          </CardXL>
        </div>

        <div className='min-[421px]:w-1/2 w-full flex flex-col gap-2.5'>
          <CardXL title='+50' subtitle={t('alphactory.instruments')} icon={PurpleInvestments}>
            {t('alphactory.instrumentsText')}
          </CardXL>
          <Button id='ourProducts' width='100%' title='ourProducts' />
          <Anchor id='contactUs' href='#name' width='100%' title='contactUs' variant='darkButton' />
        </div>
      </div>

      <picture>
        <img width={866} height={291} className='w-full max-h-[291px] rounded-xl object-cover' src={ImageCard3} alt='Laptop' loading='lazy' />
      </picture>
    </article>
  );
}

export function ImagesBox () {
  return (
    <section className='pt-[18px] pb-[54px]'>
      <Container styles='grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center content-center' maxWidth='1170px'>
        <LeftDash />
        <RightDash />
      </Container>
    </section>
  );
}
