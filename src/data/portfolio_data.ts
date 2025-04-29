

import portfolio_img_1 from "@/assets/img/gallery/feature1.jpg";
import portfolio_img_2 from "@/assets/img/gallery/feature2.jpg";
import portfolio_img_3 from "@/assets/img/gallery/feature3.jpg";
import portfolio_img_4 from "@/assets/img/gallery/feature4.jpg";
import portfolio_img_5 from "@/assets/img/gallery/feature5.jpg";
import portfolio_img_6 from "@/assets/img/gallery/feature6.jpg";
import portfolio_img_7 from "@/assets/img/gallery/feature7.jpg";
import portfolio_img_8 from "@/assets/img/gallery/feature8.jpg";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
  category: string;
  description: string;
}

const portfolio_data:PortfolioDataType[] = [
  {
    id: 1,
    title: "Tomato",
    price: 1200,
    image: portfolio_img_1,
    category: "Fresh",
    description: "Agriculture farming are the essential",
  },
  {
    id: 2,
    title: "Meat",
    price: 80,
    image: portfolio_img_2,
    category: "Organic",
    description: "Agriculture farming are the essential",
  },
  {
    id: 3,
    title: "Blossomed",
    price: 45,
    image: portfolio_img_3,
    category: "Vegetables",
    description: "Agriculture farming are the essential",
  },
  {
    id: 4,
    title: "Egg",
    price: 44,
    image: portfolio_img_4,
    category: "Vegetables",
    description: "Agriculture farming are the essential",
  },
  {
    id: 5,
    title: "Corning",
    price: 80,
    image: portfolio_img_5,
    category: "Organic",
    description: "Agriculture farming are the essential",
  },
  {
    id: 6,
    title: "Kales",
    price: 45,
    image: portfolio_img_6,
    category: "Fresh",
    description: "Agriculture farming are the essential",
  },
  // data repeat
  {
    id: 1,
    title: "Tomato",
    price: 120,
    image: portfolio_img_7,
    category: "Fresh",
    description: "Agriculture farming are the essential",
  },
  {
    id: 2,
    title: "Meat",
    price: 80,
    image: portfolio_img_8,
    category: "Organic",
    description: "Agriculture farming are the essential",
  },
  {
    id: 3,
    title: "Blossomed",
    price: 45,
    image: portfolio_img_3,
    category: "Vegetables",
    description: "Agriculture farming are the essential",
  },
  {
    id: 4,
    title: "Egg",
    price: 44,
    image: portfolio_img_4,
    category: "Vegetables",
    description: "Agriculture farming are the essential",
  },
  {
    id: 5,
    title: "Corning",
    price: 80,
    image: portfolio_img_5,
    category: "Organic",
    description: "Agriculture farming are the essential",
  },
  {
    id: 6,
    title: "Kales",
    price: 45,
    image: portfolio_img_6,
    category: "Fresh",
    description: "Agriculture farming are the essential",
  },
]

export default portfolio_data