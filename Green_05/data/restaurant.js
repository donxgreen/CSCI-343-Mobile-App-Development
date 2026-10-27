// Fictional contact details are stored together with their matching link targets.
export const RESTAURANT = {
  name: 'Coastal Table',
  tagline: 'Fresh flavors. Easy coastal dining.',
  phone: '843-555-0142',
  phoneUrl: 'tel:+18435550142',
  address: '100 Sample Street, Conway, SC 29526',
  addressUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('100 Sample Street, Conway, SC 29526'),
  website: 'example.com',
  websiteUrl: 'https://example.com',
  image: require('../assets/images/restaurant.jpg'),
};

// Each record supplies a MenuItem with its name, local picture, and dollar price.
export const MENU_ITEMS = [
  {
    id: 'm1',
    name: 'Coastal Burger',
    price: 14.5,
    image: require('../assets/images/menu/burger.jpg'),
  },
  {
    id: 'm2',
    name: 'Margherita Pizza',
    price: 13,
    image: require('../assets/images/menu/margherita-pizza.jpg'),
  },
  {
    id: 'm3',
    name: 'Alfredo Pasta',
    price: 16,
    image: require('../assets/images/menu/alfredo-pasta.jpg'),
  },
  {
    id: 'm4',
    name: 'Garden Salad',
    price: 10.5,
    image: require('../assets/images/menu/garden-salad.jpg'),
  },
  {
    id: 'm5',
    name: 'Chocolate Cake',
    price: 7,
    image: require('../assets/images/menu/chocolate-cake.jpg'),
  },
];
