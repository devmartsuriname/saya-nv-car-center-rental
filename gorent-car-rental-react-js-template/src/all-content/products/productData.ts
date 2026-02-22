

import productImg1 from "../../assets/images/shop/shop-product-1-1.jpg"
import productImg2 from "../../assets/images/shop/shop-product-1-2.jpg"
import productImg3 from "../../assets/images/shop/shop-product-1-3.jpg"
import productImg4 from "../../assets/images/shop/shop-product-1-4.jpg"
import productImg5 from "../../assets/images/shop/shop-product-1-5.jpg"
import productImg6 from "../../assets/images/shop/shop-product-1-6.jpg"
import productImg7 from "../../assets/images/shop/shop-product-1-7.jpg"
import productImg8 from "../../assets/images/shop/shop-product-1-8.jpg"
import productImg9 from "../../assets/images/shop/shop-product-1-9.jpg"
import productImg10 from "../../assets/images/shop/shop-product-1-10.jpg"
import productImg11 from "../../assets/images/shop/shop-product-1-11.jpg"
import productImg12 from "../../assets/images/shop/shop-product-1-12.jpg"
import type { ProductItem } from "./productType"

export const productsList: ProductItem[] = [
    {
        id: 1,
        title: `Gree Air Conditioner`,
        image: productImg1,
        price: 33,
        rating: 4.9,
        isNew: true,
    },
    {
        id: 2,
        title: `Pliers | Cutting, Gripping`,
        image: productImg2,
        price: 50,
        rating: 5.5,
    },
    {
        id: 3,
        title: `Nut Driver`,
        image: productImg3,
        price: 33,
        rating: 4.5,
        discouunt: "5",
        previousPrice: 28
    },
    {
        id: 4,
        title: `Screwdriver and wrench`,
        image: productImg4,
        previousPrice: 25,
        price: 20,
        rating: 4.9,
        discouunt: "5",
    },
    {
        id: 5,
        title: `Gree Air Conditioner`,
        image: productImg5,
        price: 33,
        rating: 4.9,
    },
    {
        id: 6,
        title: `Monitor Cable`,
        image: productImg6,
        price: 35,
        rating: 4.9,
    },
    {
        id: 7,
        title: `Fiber Optical Cable`,
        image: productImg7,
        price: 27,
        rating: 4.9,
        isNew: true,
    },
    {
        id: 8,
        title: `Electrical Wire`,
        image: productImg8,
        price: 44,
        rating: 5,
    },
    {
        id: 9,
        title: `Computer power supply`,
        image: productImg9,
        previousPrice: 49,
        price: 45,
        rating: 4.9,
        discouunt: "3",
    },
    {
        id: 10,
        title: `Fite ON AC_DC Adapter`,
        image: productImg10,
        price: 33,
        rating: 4.9,
    },
    {
        id: 11,
        title: `Gree Air Conditioner`,
        image: productImg11,
        price: 33,
        rating: 4.9,
    },
    {
        id: 12,
        title: `Wireless Mouse Keyboard`,
        image: productImg12,
        previousPrice: 42,
        price: 35,
        rating: 4.9,
        isNew: true,
        discouunt: "7"
    },
    {
        id: 13,
        title: `Monitor Cable`,
        image: productImg3,
        price: 33,
        rating: 4.9,
    },
    {
        id: 14,
        title: `Gree Air Conditioner`,
        image: productImg4,
        price: 33,
        rating: 4.9,
        isNew: true,
    },
    {
        id: 15,
        title: `Fite ON AC_DC Adapter`,
        image: productImg10,
        previousPrice: 50,
        discouunt: "13",
        price: 33,
        rating: 4.9,
        isNew: true,
    },
    {
        id: 16,
        title: `Gree Air Conditioner`,
        image: productImg11,
        price: 33,
        rating: 4.9,
    },
    {
        id: 17,
        title: `Electrical Wire`,
        image: productImg8,
        price: 33,
        rating: 4.9,
        isNew: true,
    },
]
