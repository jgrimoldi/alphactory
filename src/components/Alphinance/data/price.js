export const modules = [
  {
    animate: 'animate-slide-up-1',
    id: 'Modulo_1',
    variant: 'green',
    title: 'alphinance.firstModule',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 110,
    discount: { price: 99.99, installment: 18 },
    features: {
      'Lorem ipsum dolor': true,
      'Sit amet': true,
      'Consectetur adispiscing elit': true,
      'Nam condimentum': false,
      'Pretium ullamcorper': false,
      'Proin non arcu ex': false,
      'Interdum et': false
    }
  },
  {
    animate: 'animate-slide-up-2',
    id: 'Modulo_2',
    variant: 'gray',
    title: 'alphinance.secondModule',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 110,
    discount: { price: 99.99, installment: 18 },
    features: {
      'Lorem ipsum dolor': true,
      'Sit amet': true,
      'Consectetur adispiscing elit': true,
      'Nam condimentum': true,
      'Pretium ullamcorper': false,
      'Proin non arcu ex': false,
      'Interdum et': false
    }
  },
  {
    animate: 'animate-slide-up-3',
    id: 'Modulo_3',
    variant: 'light',
    title: 'alphinance.thirdModule',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 110,
    discount: { price: 99.99, installment: 18 },
    features: {
      'Lorem ipsum dolor': true,
      'Sit amet': true,
      'Consectetur adispiscing elit': true,
      'Nam condimentum': true,
      'Pretium ullamcorper': true,
      'Proin non arcu ex': false,
      'Interdum et': false
    }
  },
  {
    animate: 'animate-slide-up-4',
    id: 'Modulo_4',
    variant: 'dark',
    title: 'alphinance.fourthModule',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 110,
    discount: { price: 99.99, installment: 18 },
    features: {
      'Lorem ipsum dolor': true,
      'Sit amet': true,
      'Consectetur adispiscing elit': true,
      'Nam condimentum': true,
      'Pretium ullamcorper': true,
      'Proin non arcu ex': true,
      'Interdum et': true
    }
  }
];

export const moduleOptions = modules.map(module => ({ value: module.id, label: module.title }));
