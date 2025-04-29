import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/header/home-1.jpg";
import demo_img_2 from "@/assets/img/header/home-2.jpg";
import demo_img_3 from "@/assets/img/header/home-3.jpg";

interface DataType {
	id: number;
	title: string;
	link: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		demo_img?: StaticImageData;
	}[];
}

// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		img_dropdown: false,
		sub_menus: [
			{ link: "/", title: "Home 01", demo_img: demo_img_1 },
			// { link: "/home-2", title: "Home 02", demo_img: demo_img_2 },
			// { link: "/home-3", title: "Home 03", demo_img: demo_img_3 },
		],
	},
	{
		id: 2,
		title: "About Us",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Service",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service", title: "Services" },
			{ link: "/service-details", title: "Services Details" },
		],
	},
	{
		id: 4,
		title: "Projects",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/gallery", title: "Gallery" },
			{ link: "/gallery-details", title: "Gallery Details" },
		],
	},
	{
		id: 5,
		title: "Blog",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Blog" },
			{ link: "/blog-details", title: "Blog Details" },
		],
	},
	{
		id: 6,
		title: "Pages",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/about", title: "About" },
			{ link: "/product-list", title: "Product" },
			{ link: "/product-details", title: "Product Details" },
			{ link: "/faq", title: "FAQ" },
			// { link: "/contact", title: "Contact" },
		],
	},

	{
		id: 7,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
