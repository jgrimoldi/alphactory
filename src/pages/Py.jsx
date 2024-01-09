import { Helmet } from 'react-helmet-async';

export default function Py () {
  return (
    <>
      <Helmet>
        <title>Alphactory | Py</title>
        <link rel='canonical' href={window.location.href} />
        <meta property='og:title' content='Py' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='/Logo.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Py' />
        <meta name='twitter:description' content='' />
        <meta name='twitter:image' content='/Logo.png' />
      </Helmet>
      <main>
        Py
      </main>
    </>
  );
}
