import { useContext } from 'react';
import { Anchor } from '../Inputs';
import { ModulesContext } from '../../contexts/ModulesContext';
import { useTranslation } from 'react-i18next';
import { useIntersection } from '../../hooks/useIntersection';

const calculatePrice = (frequency, price) => {
  return frequency === 'monthly' ? price : price * 12;
};

export function PriceCard ({ info, frequency, index }) {
  const { t } = useTranslation();
  const { setModule } = useContext(ModulesContext);
  const [priceRef, isIntersecting] = useIntersection({ treshold: 0.5, marginRoot: '500px' });

  const { id, variant, title, subtitle, price, discount, animate } = info;
  const variants = {
    gray: { article: 'bg-bg-dark-gray text-white', price: 'text-ft-light-green', listStyle: 'text-ft-light-green', listText: 'text-white' },
    green: { article: 'bg-ft-green text-white', price: 'text-ft-light-green', listStyle: 'text-ft-light-green', listText: 'text-white' },
    light: { article: 'bg-ft-light-green text-ft-dark-green', price: 'text-ft-dark-green', listStyle: 'text-ft-dark-green', listText: 'text-ft-dark-green' },
    dark: { article: 'bg-ft-dark-green text-white', price: 'text-ft-light-green', listStyle: 'text-ft-light-green', listText: 'text-white' }
  };

  const newPrice = calculatePrice(frequency, price);

  const featureList = [
    'Lorem ipsum dolor',
    'Sit amet',
    'Consectetur adispiscing elit',
    'Nam condimentum',
    'Pretium ullamcorper',
    'Proin non arcu ex',
    'Interdum et'
  ];

  const handleClick = (newValue) => {
    setModule(newValue);
  };

  return (
    <article ref={priceRef} className={`flex flex-col gap-5 rounded-2xl p-7 text-sm opacity-0 ${variants[variant].article} ${isIntersecting ? animate : ''}`}>
      <header>
        <h4 className='text-center font-semibold text-3xl mb-5' id={title}>{t(title)}</h4>
        <p className='max-w-xs sm:text-left text-center mx-auto'>{subtitle}</p>
      </header>
      <ul aria-labelledby={title} className={`mx-auto list-disc font-medium space-y-2.5 ${variants[variant].listStyle}`}>
        {featureList.map((feature, index) => (
          <li key={index}>
            <span className={variants[variant].listText}>{feature}</span>
          </li>
        ))}
      </ul>
      <section className='text-center my-2.5 space-y-2.5' aria-labelledby={`price${id}`}>
        <h5 id={`price${id}`} className={`font-semibold text-3xl ${variants[variant].price}`}>{newPrice} USD</h5>
        <p className='font-medium'>{`From ${discount.price}USD per month in ${discount.installment} interest-free installments`}</p>
      </section>
      <footer>
        <Anchor width='100%' title='acquire' variant='greenButton' href='#module' onClick={() => handleClick(id)} />
      </footer>
    </article>
  );
}
