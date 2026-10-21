// Food images only (Unsplash). Swap any URL for a local asset in /src/assets when the Figma exports are ready.
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u('photo-1544025162-d76694265947', 1600),
  heroSpecial: u('photo-1565299624946-b28f40a0ae38', 400),
  steak: u('photo-1544025162-d76694265947'),
  cocktail: u('photo-1514362545857-3bc16c4c7d1b'),
  dining: u('photo-1414235077428-338989a2e8c0'),
  bbqPlate: u('photo-1598103442097-8b74394b95c6', 700),
  donut: u('photo-1551024601-bec78aea704b', 700),
  coffee: u('photo-1509042239860-f550ce710b93', 700),
  burger: u('photo-1568901346375-23c9450c58cd', 700),
  pizza: u('photo-1565299624946-b28f40a0ae38', 700),
  pasta: u('photo-1473093295043-cdd812d0e601', 700),
  cake: u('photo-1578985545062-69928b1d9587', 700),
  salad: u('photo-1546069901-ba9599a7e63c', 700),
  skewers: u('photo-1555939594-58d7cb561ad1', 900),
  cocktailCard: u('photo-1514362545857-3bc16c4c7d1b', 900),
  parfait: u('photo-1488477181946-6428a0291777', 700),
  pancakes: u('photo-1567620905732-2d1ec7ab7445', 700),
  toast: u('photo-1482049016688-2d3e1b311543', 700),
  interior: u('photo-1517248135467-4c7edcad34c4', 700),
  food1: u('photo-1504674900247-0877df9cc836', 700),
  food2: u('photo-1540189549336-e6e99c3679fe', 700),
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Shop', href: '#featured', dropdown: true },
  { label: 'Blog', href: '#news', dropdown: true },
  { label: 'Pages', href: '#experts', dropdown: true },
  { label: 'Contact', href: '#footer' },
];

export const ABOUT_CARDS = [
  { title: 'Restaurant', img: IMG.steak, offset: false },
  { title: 'Coctail Bar', img: IMG.cocktail, offset: true },
  { title: 'Private Dining', img: IMG.dining, offset: false },
];

export const MENU_TABS = [
  {
    id: 'dessert',
    label: 'Dessert',
    icon: 'Donut',
    title: 'BBQ',
    img: IMG.bbqPlate,
    items: [
      { name: 'Sake BBQ sauce', desc: 'radish, black sesame seeds, coriander', price: 9 },
      { name: 'BBQ baby back ribs', desc: 'sticky Asian glaze, charred lime, chilli cashews', price: 16 },
      { name: 'Half smoked chicken', desc: 'miso butter glaze, charred lime wedge, sake bbq', price: 34 },
      { name: 'Dusted chicken wings', desc: 'tossed in Korean hot sauce, pickled radish', price: 40 },
    ],
  },
  {
    id: 'steak',
    label: 'Steak',
    icon: 'Beef',
    title: 'Steak',
    img: IMG.steak,
    items: [
      { name: 'Ribeye on the bone', desc: 'garlic butter, rosemary, sea salt', price: 38 },
      { name: 'Filet mignon', desc: 'red wine jus, truffle mash', price: 42 },
      { name: 'Peppercorn sirloin', desc: 'cracked pepper cream, hand cut fries', price: 29 },
      { name: 'Tomahawk to share', desc: 'chimichurri, roasted vegetables', price: 85 },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    icon: 'Coffee',
    title: 'Coffee',
    img: IMG.coffee,
    items: [
      { name: 'Black coffee', desc: 'single origin, slow roasted', price: 4 },
      { name: 'Caramel latte', desc: 'espresso, steamed milk, salted caramel', price: 6 },
      { name: 'Flat white', desc: 'double ristretto, silky microfoam', price: 5 },
      { name: 'Iced mocha', desc: 'dark chocolate, cold brew, cream', price: 7 },
    ],
  },
  {
    id: 'burger',
    label: 'Burger',
    icon: 'Sandwich',
    title: 'Burger',
    img: IMG.burger,
    items: [
      { name: 'Classic cheeseburger', desc: 'beef patty, cheddar, pickles, house sauce', price: 12 },
      { name: 'Shroom bacon burger', desc: 'swiss, smoked bacon, garlic mushrooms', price: 14 },
      { name: 'Crispy chicken burger', desc: 'buttermilk chicken, slaw, sriracha mayo', price: 13 },
      { name: 'Loaded fries', desc: 'cheese sauce, jalapeno, spring onion', price: 8 },
    ],
  },
];

export const DISCOVER = [
  { title: 'Steaks & BBQ', desc: 'canonical classics to obscure tiki drinks', price: 120, img: IMG.skewers },
  { title: 'Cocktails', desc: 'canonical classics to obscure tiki drinks', price: 120, img: IMG.cocktailCard },
];

export const DISHES = [
  { name: 'Crispy Fried Chicken', oldPrice: 11.76, price: 10.85, img: IMG.bbqPlate },
  { name: 'Shroom Bacon Burger', oldPrice: 12.76, price: 11.76, img: IMG.pizza },
  { name: 'Delicious Black Coffee', oldPrice: 12.76, price: 11.76, img: IMG.coffee },
  { name: 'Creamy Alfredo Pasta', oldPrice: 14.5, price: 12.9, img: IMG.pasta },
  { name: 'Choco Lava Cake', oldPrice: 9.5, price: 7.9, img: IMG.cake },
  { name: 'Fresh Garden Salad', oldPrice: 10.2, price: 8.75, img: IMG.salad },
];

export const TESTIMONIALS = [
  {
    quote: 'A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts',
    name: 'Bratlee Hamint',
  },
  {
    quote: 'Every plate arrived hot, beautifully presented and full of flavour. The staff made our family dinner feel truly special.',
    name: 'Sara Collins',
  },
  {
    quote: 'The steaks are unreal and the cocktails are even better. We booked a table online in under a minute and will be back soon.',
    name: 'Daniel Rivera',
  },
];

export const CHEFS = [
  { name: 'Thomas Walim', role: 'Dessert specialist' },
  { name: 'James Jhonson', role: 'Chef Master' },
  { name: 'Room Minal', role: 'Dessert specialist' },
];

export const NEWS = [
  { date: 'April 6, 2023', title: 'Creamy Chicken Alfredo', author: 'Willimes Thomas', img: IMG.interior },
  { date: 'April 6, 2023', title: 'Air Fryer Salmon', author: 'Willimes Thomas', img: IMG.dining },
];

export const INSTA_IMAGES = [IMG.steak, IMG.pasta, IMG.pancakes, IMG.toast, IMG.burger, IMG.cake, IMG.salad, IMG.pizza];

export const FOOTER = {
  about: ['Fredoka One', 'Special Dish', 'Reservation', 'Contact'],
  menu: ['Steaks', 'Burgers', 'Cocktails', 'Bar B.Q', 'Desserts'],
};
