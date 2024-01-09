import { Link } from 'react-router-dom';

import { Container } from './Interface/index';
import { Links, Networks } from './Footer/index';
import { FOOTER } from '../constants/URLs';
import { LogoTypeWhite } from '../assets/Images';
import { useTranslation } from 'react-i18next';

export default function Footer () {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-black'>
      <a aria-label='To top button' className='w-10 h-10 flex items-center justify-center rounded-full absolute -top-5 right-4 bg-white border border-white hover:bg-black hover:text-white focus:ring-black text-black' href='#top'>
        <i className='pi pi-arrow-up' />
      </a>
      <Container styles='2xl:py-12 py-8'>
        <div className='flex xl:justify-start justify-evenly flex-wrap 2xl:mb-16 mb-11 2xl:gap-x-36 gap-x-24 2xl:gap-y-12 gap-y-8'>
          <div className='min-w-max 2xl:w-56 w-48 2xl:mr-12 md:mr-8 mr-0'>
            <Link to='/alphactory'>
              <img src={LogoTypeWhite} className='2xl:max-w-[201px] max-w-[134px] mx-auto' alt='Alphactory Logo' />
            </Link>
            <Networks />
          </div>
          {FOOTER.map(({ title, children }) => <Links key={title} title={title} links={children} />)}
        </div>

        <hr className='border-gray-200 sm:mx-auto dark:border-gray-700 2xl:my-9 my-6' />

        <div className='text-center 2xl:py-3 py-1'>
          <span className='2xl:text-base text-xs text-white font-medium '>
            © Copyright {currentYear} <Link to='/' className='hover:underline'>Alphinance</Link>. {t('allRights')}
          </span>
        </div>
      </Container>
    </footer>
  );
}
