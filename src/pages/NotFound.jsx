import { Helmet } from 'react-helmet-async';
import { Error404 } from '../assets/Images';

export default function NotFound () {
  return (
    <>
      <Helmet>
        <title>Oops! Site not found</title>
      </Helmet>
      <main>
        <img width={750} height={688} className='m-auto py-20 px-2' src={Error404} alt='Page not found' />
      </main>
    </>
  );
}
