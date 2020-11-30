import sweater1 from "../images/sweater1.jpg";
import sweater2 from "../images/sweater2.jpg";
import sweater3 from "../images/sweater3.jpg";
import sweater4 from "../images/sweater4.jpg";
import sweater5 from "../images/sweater5.jpg";
import sweater6 from "../images/sweater6.jpg";
import sweater7 from "../images/sweater7.jpg";
import sweater8 from "../images/sweater8.jpg";
import sweater9 from "../images/sweater9.jpg";

const sweaters = [
  {
    id: 0,
    image: sweater1,
    brand: "Nadine",
    country: "Italy",
    season: "winter",
    material: "modal",
    size: "39",
    price: "234.3",
    gender: "girl",
    color: "navy",
  },
  {
    id: 1,
    image: sweater2,
    brand: "La Cause",
    country: "France",
    season: "autumn",
    material: "cotton",
    size: "38",
    price: "454.25",
    gender: "girl",
    color: "belige",
  },
  {
    id: 2,
    image: sweater3,
    brand: "TopHat",
    country: "Ukraine",
    season: "summer",
    material: "spandex",
    size: "42",
    price: "122.46",
    gender: "girl",
    color: "pink",
  },
  {
    id: 3,
    image: sweater4,
    brand: "Nadine",
    country: "Italy",
    season: "winter",
    material: "tencel",
    size: "39",
    price: "234.3",
    gender: "boy",
    color: "yellow",
  },
  {
    id: 4,
    image: sweater5,
    brand: "La Cause",
    country: "France",
    season: "autumn",
    material: "rayon",
    size: "38",
    price: "454.25",
    gender: "unisex",
    color: "blue",
  },
  {
    id: 5,
    image: sweater6,
    brand: "TopHat",
    country: "Ukraine",
    season: "spring",
    material: "knitwear",
    size: "42",
    price: "122.46",
    gender: "girl",
    color: "navy",
  },
  {
    id: 6,
    image: sweater7,
    brand: "Nadine",
    country: "Italy",
    season: "winter",
    material: "cotton",
    size: "39",
    price: "234.3",
    gender: "boy",
    color: "brown",
  },
  {
    id: 7,
    image: sweater8,
    brand: "La Cause",
    country: "France",
    season: "autumn",
    material: "spandex",
    size: "38",
    price: "454.25",
    gender: "boy",
    color: "white",
  },
  {
    id: 8,
    image: sweater9,
    brand: "TopHat",
    country: "Ukraine",
    season: "spring",
    material: "rayon",
    size: "42",
    price: "122.46",
    gender: "girl",
    color: "black",
  },
];

export const getAllSweaters = () => {
  return sweaters;
};
export const addSweater = (body) => {
  return [...sweaters, body];
};
export const removeSweater = (id) => {
  return sweaters.filter((sweater) => sweater.id !== id);
};
export const updateSweater = (id, body) => {
  return sweaters.map((sweater) => (sweater.id === id ? body : sweaters));
};
