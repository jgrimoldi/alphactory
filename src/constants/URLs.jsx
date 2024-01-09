import { Instagram, TwitterX, Linkedin } from '../components/Interface/Icons';

const PRODUCTS = [
  { title: 'alphTitle', url: '/alphinance' },
  { title: 'pyTitle', url: '/py' }
];

const CONTACT = [
  { title: 'contactInfo', url: '/contact-for-information' },
  { title: 'hiring', url: '/hiring' }
];

const LEGAL = [
  { title: 'terms', url: '/terms-and-condition' },
  { title: 'privacy', url: '/privacy-policy' }
];

export const FOOTER = [
  { title: 'products', children: PRODUCTS },
  { title: 'contact', children: CONTACT },
  { title: 'legal', children: LEGAL }
];

export const SOCIAL = [
  { title: 'Instagram', icon: <Instagram />, url: 'https://instagram.com' },
  { title: 'Twitter', icon: <TwitterX />, url: 'https://twitter.com' },
  { title: 'Linkedin', icon: <Linkedin />, url: 'https://linkedin.com/in/' }
];

export const URLS = [
  ...PRODUCTS,
  ...CONTACT,
  ...LEGAL
];
