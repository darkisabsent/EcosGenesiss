import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  '1 Token',
  '10 Tokens',
  '1000 Tokens',
  
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

export const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/token.jpg`,
    name: PRODUCT_NAME[index],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});
