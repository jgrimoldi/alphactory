import { useTranslation } from 'react-i18next';
import { Link } from './Link';

export function Links ({ title, links }) {
  const { t } = useTranslation();

  return (
    <div className='2xl:w-56 w-48 flex flex-col items-center md:items-start 2xl:gap-4 gap-2 text-white'>
      <h2 className='font-bold 2xl:text-base text-sm'>{t(title)}</h2>
      <ul className='font-normal text-center md:text-left'>
        {links.map(({ title, url }) => <Link key={title} title={title} url={url} />)}
      </ul>
    </div>
  );
}
