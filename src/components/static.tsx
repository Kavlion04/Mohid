import xiaomi from "../assets/xiomi.svg";
import fitbit from "../assets/wilfit.svg";
import apple from "../assets/apple.svg";
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import card5 from "../assets/card5.svg";
import card6 from "../assets/card6.svg";
import cara1 from "../assets/cara1.svg";
import cara2 from "../assets/cara2.svg";

export const brands = [
  {
    name: "Apple",
    logo: apple,
    description: "Cutting edge technology with sleek design",
  },
  {
    name: "Xiaomi",
    logo: xiaomi,
    description: "High quality watches at affordable price",
  },
  {
    name: "FitBit",
    logo: fitbit,
    description: "Focused on fitness and health tracking",
  },
];

export const initialProducts = [
  {
    id: 1,
    name: "Apple Smart I",
    price: 255.0,
    originalPrice: 300.0,
    rating: 5,
    image: card1,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Apple Smart II",
    price: 255.0,
    originalPrice: 300.0,
    rating: 5,
    image: card2,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Apple Smart III",
    price: 255.0,
    originalPrice: 300.0,
    rating: 5,
    image: card3,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Apple Smart IV",
    price: 399.0,
    originalPrice: 450.0,
    rating: 5,
    image: card4,
    isFavorite: false,
  },
  {
    id: 5,
    name: "Samsung Watch Pro",
    price: 255.0,
    originalPrice: 300.0,
    rating: 5,
    image: card5,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Fitbit Max 1",
    price: 155.0,
    originalPrice: 200.0,
    rating: 4,
    image: card6,
    isFavorite: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Hamza Fasi",
    role: "Watch Enthusiast",
    image: cara1,
    text: "Don't waste time, just order! This is the best website to puschase smart watches.",
    rating: 5,
  },
  {
    id: 2,
    name: "Hafiz Rizuela",
    role: "Fitness Trainer",
    image: cara2,
    text: "Don't waste time, just order! This is the best website to puschase smart watches.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hafiz Rizuela",
    role: "Fitness Trainer",
    image: cara1,
    text: "Don't waste time, just order! This is the best website to puschase smart watches.",
    rating: 5,
  },
  {
    id: 4,
    name: "Hafiz Rizuela",
    role: "Fitness Trainer",
    image: cara2,
    text: "Don't waste time, just order! This is the best website to puschase smart watches.",
    rating: 5,
  },
  {
    id: 5,
    name: "Hafiz Rizuela",
    role: "Fitness Trainer",
    image: cara1,
    text: "Don't waste time, just order! This is the best website to puschase smart watches.",
    rating: 5,
  },
  {
    id: 6,
    name: "Hafiz Rizuela",
    role: "Fitness Trainer",
    image: cara2,
    text: "Don't waste time, just order! This is the best website to puschase smart watches.",
    rating: 5,
  },
];

export const navigationLinks = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#brands",
    label: "Brands  ",
  },
  {
    href: "#products",
    label: "Recent Products",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#about",
    label: "About",
  },
];
