import { Link } from 'react-router-dom';
import { Arrow } from './Icons';

export function Card ({ alt, src, width, height }) {
  return (
    <div className='w-full min-[420px]:h-full flex items-center justify-between min-[420px]:max-h-16 h-16 px-3.5 mb-2.5 bg-ip-gray rounded-lg'>
      <img width={width} height={height} className='xl:max-w-[174px] max-w-[110px]' src={src} alt={alt} />
      <Link className='h-auto' aria-label={`Redirect to Login ${alt}`}>
        <i className='w-5 2xl:w-[30px] h-5 2xl:h-[30px] bg-ip-purple rounded-full flex p-1 2xl:p-2'>
          <Arrow />
        </i>
      </Link>
    </div>
  );
}

export function CardXL ({ variant, title, subtitle, children, icon: Icon }) {
  const isDark = variant === 'dark';
  const cardClasses = `w-full min-[421px]:h-full flex flex-col justify-between gap-5 p-5 2xl:p-7 ${isDark ? 'bg-bg-dark-blue' : 'bg-ip-gray'} rounded-xl`;
  const textClasses = `font-medium text-sm 2xl:text-xl ${isDark ? 'text-white' : ''}`;

  return (
    <div className={cardClasses}>
      <div className='flex justify-between'>
        <header variant='blackText' className='flex flex-col items-start md:px-0 px-0'>
          <h3 className={`font-semibold text-3xl 2xl:text-5xl ${isDark ? 'text-white' : ''}`}>{title}</h3>
          <h4 className={`font-medium 2xl:text-xl ${isDark ? 'text-white' : ''}`}>{subtitle}</h4>
        </header>
        {Icon && <i className='w-[35px] h-[35px]'><Icon /></i>}
      </div>
      <p className={textClasses}>
        {children}
      </p>
    </div>
  );
}
