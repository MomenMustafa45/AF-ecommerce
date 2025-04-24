import { StaticImageData } from "next/image";
import product1 from "../../../../public/product-1.jpg";
import product2 from "../../../../public/product-2.jpg";
import product3 from "../../../../public/product-3.jpg";
import product4 from "../../../../public/product-4.jpg";
import product5 from "../../../../public/product-5.jpg";
import product6 from "../../../../public/product-6.jpg";
import product7 from "../../../../public/product-7.jpg";
import product8 from "../../../../public/product-8.jpg";
import product9 from "../../../../public/product-9.jpg";

export type SliderData = {
  id: string;
  title: string;
  description: string;
  url: string | StaticImageData;
  price: string;
};

export const productsData: SliderData[] = [
  {
    title: "White T-Shirt",
    id: "1",
    description: "This is a T-shirt normal and for us",
    url: product1,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "2",
    description: "This is a T-shirt normal and for us",
    url: product2,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "3",
    description: "This is a T-shirt normal and for us",
    url: product3,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "4",
    description: "This is a T-shirt normal and for us",
    url: product4,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "5",
    description: "This is a T-shirt normal and for us",
    url: product5,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "6",
    description: "This is a T-shirt normal and for us",
    url: product6,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "7",
    description: "This is a T-shirt normal and for us",
    url: product7,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "8",
    description: "This is a T-shirt normal and for us",
    url: product8,
    price: "29.99",
  },
  {
    title: "White T-Shirt",
    id: "9",
    description: "This is a T-shirt normal and for us",
    url: product9,
    price: "29.99",
  },
];
