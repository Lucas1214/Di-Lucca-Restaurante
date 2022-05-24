/* eslint-disable import/no-anonymous-default-export */
import images from './images';

const wines = [
  {
    title: ' Shiraz',
    price: 'R$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Sminorf',
    price: 'R$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Royality Salut',
    price: 'R$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Black Label',
    price: 'R$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Soda Alcoolica',
    price: 'R$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'R$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R$16',
    tags: 'Rum escuro | Cerveja de gengibre | Fatia de Limão',
  },
  {
    title: 'Daiquiri',
    price: 'R$10',
    tags: 'Rum | Suco cítrico| Açucar',
  },
  {
    title: 'Old Fashioned',
    price: 'R$31',
    tags: 'Bourbon | Açucar Marrom | Angostura Amargo',
  },
  {
    title: 'Negroni',
    price: 'R$26',
    tags: 'Gin | Sweet Vermouth | Campari | Suco de Laranja',
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


export default { wines, cocktails, awards };