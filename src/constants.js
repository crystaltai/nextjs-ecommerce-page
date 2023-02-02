import CoffeeBag1 from '../src/images/coffee-bag-1.png';
import CoffeeBag2 from '../src/images/coffee-bag-2.png';
import CoffeeBag3 from '../src/images/coffee-bag-3.png';
import CoffeeBag4 from '../src/images/coffee-bag-4.png';
import CoffeeBag5 from '../src/images/coffee-bag-5.png';
import CoffeeBag6 from '../src/images/coffee-bag-6.png';

const coffeeData = [
  {
    name: 'Seabright House Blend',
    notes: ['Honeydew', 'Apricot', 'Hazelnut'],
    price: 18.25,
    picture: CoffeeBag1,
    details: {
      type: 'Single Origin',
      roast: 'Light',
      origin: 'Ethiopia',
    },
  },
  {
    name: 'Streetlevel',
    notes: ['Clementine', 'Red Apple', 'Honeycomb'],
    price: 18.75,
    picture: CoffeeBag2,
    details: {
      type: 'Blend',
      roast: 'Light',
      region: 'Colombia',
    },
  },
  {
    name: 'Sermon',
    notes: ['Blueberry Pie', 'Cocoa', 'Candied Pecan'],
    price: 18.75,
    picture: CoffeeBag3,
    details: {
      type: 'Single Origin',
      roast: 'Medium',
      region: 'Ethiopia',
    },
  },
  {
    name: 'The 1950',
    notes: ['Nectarine', 'Key Lime', 'Brown Sugar'],
    price: 19.5,
    picture: CoffeeBag4,
    details: {
      type: 'Decaf',
      roast: 'Light',
      region: 'Guatemala',
    },
  },
  {
    name: 'Santa Clara',
    notes: ['Green Apple', 'Melon', 'Caramel'],
    price: 21.25,
    picture: CoffeeBag5,
    details: {
      type: 'Blend',
      roast: 'Dark',
      region: 'Panama',
    },
  },
  {
    name: 'Elvis Tineo',
    notes: ['Toasted Coconut', 'Cherry', 'Dark Chocolate'],
    price: 22.75,
    picture: CoffeeBag6,
    details: {
      type: 'Single Origin',
      roast: 'Medium',
      region: 'Costa Rica',
    },
  },
  {
    name: 'French Blue Blend',
    notes: ['Apple', 'Pear', 'Chocolate'],
    price: 18.5,
    picture: CoffeeBag1,
    details: {
      type: 'Decaf',
      roast: 'Medium',
      origin: 'Colombia',
    },
  },
  {
    name: 'Windowlevel',
    notes: ['Orange', 'Watermelon', 'Honeycomb'],
    price: 16.75,
    picture: CoffeeBag2,
    details: {
      type: 'Single Origin',
      roast: 'Light',
      region: 'Ethiopia',
    },
  },
  {
    name: 'Windy Road',
    notes: ['Pumpkin', 'Cinnamon', 'Hazelnut'],
    price: 18.75,
    picture: CoffeeBag3,
    details: {
      type: 'Blend',
      roast: 'Medium',
      region: 'Guatemala',
    },
  },
];

export default coffeeData;
