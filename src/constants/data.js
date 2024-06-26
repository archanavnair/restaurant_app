import images from './images';

const appetizers = [
  {
    title: 'A1: Crispy Spring Rolls w/ Pork',
    price: '$6.95',
    tags: '2 Rolls',
  },
  {
    title: 'A5: Thai Tom Yum Soup',
    price: '$6.50',
    tags: 'Choice of Chicken, Beef, Shrimp or Veggies',
  },
  {
    title: 'A6: Tempura Shrimp',
    price: '$9.25',
    tags: '6 Pieces',
  },
  {
    title: 'A7: Cream Cheese Wontons',
    price: '$8.50',
    tags: '7 Peices',
  },
  {
    title: 'A9: Thai Basil & Chilli Wok Wings',
    price: '$12.95',
    tags: '',
  },
  {
    title: 'A11: Thai Green Mango Salad w/ Grillled Meat',
    price: '$11.95',
    tags: 'Choice of Grilled Chicken/Beef or Shrimp',
  },
];

const main_course  = [
  {
    title: 'P1: House Special Pho',
    price: '(S) 13.95 (L) 16.95',
    tags: '',
  },
  {
    title: 'P2: Rare Beef Pho',
    price: '(S) 13.95 (L) 16.95',
    tags: '',
  },
  {
    title: 'P7: Chicken Pho',
    price: '(S) 13.95 (L) 16.95',
    tags: '',
  },
  {
    title: 'M1: Stir Fried Egg Noodles',
    price: '$14.95',
    tags: 'Choice of Beef, Chicken, Tofu or Shrimp ',
  },
  {
    title: 'M5: Traditional Pad Thai',
    price: '$14.95',
    tags: 'Choice of Beef, Chicken, Tofu or Shrimp ',
  },
  {
    title: 'N1: Grilled Pork Chop on Rice',
    price: '$16.95',
    tags: 'Choice of Beef, Chicken or Pork ',
  },
  {
    title: 'G1: General Tao\'s Chicken',
    price: '$16.95',
    tags: ' ',
  },
  {
    title: 'G2: Sweet & Sour Chicken',
    price: '$16.95',
    tags: ' ',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { appetizers, main_course, awards };