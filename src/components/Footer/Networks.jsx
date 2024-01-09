import { Link } from 'react-router-dom';
import { SOCIAL } from '../../constants/URLs';

export function Networks () {
  return (
    <div className='2xl:max-w-[201px] max-w-[134px] flex justify-between mx-auto 2xl:pt-[34.5px] pt-[23px] md:justify-around'>
      {SOCIAL.map(({ title, icon, url }) =>
        <Link key={url} to={url} className='2xl:mr-6 md:mr-4 fill-white hover:fill-ip-purple hover:translate-y-0.5 transition-all duration-700 ease-in-out' aria-label={title}>
          {icon}
          <span className='sr-only'>{title} Page</span>
        </Link>)}
    </div>
  );
}
