import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import { blogs_link, cars_link, home_link, pages_link, shops_link } from '../link-content/NavLink';
import type { NavItem } from '../link-content/LinkType';
import useGorentContext from '../context/useGorentContext';

const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useGorentContext();
    const [isHome, setIsHome] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [isCars, setIsCars] = useState<boolean>(false);
    const [isShop, setIsShop] = useState<boolean>(false);
    const [isBlog, setIsBlog] = useState<boolean>(false);
    const currentPath = useLocation().pathname;
    const findLocation = (array: NavItem[]): boolean => {
        return array.some(item => item?.link === currentPath);
    }; 
    const closeMobileManu = () => {
        setIsMobileManu(false)
        setIsHome(false)
        setIsPages(false)
        setIsCars(false)
        setIsShop(false)
        setIsBlog(false)
    }
    return (
        <ul className="main-menu__list mobileManulist">
            <li className="dropdown">
                <a href="#" className={`${isHome || findLocation(home_link) ? "expanded" : ""}`}>
                    Home
                    <button className={`${isHome ? "expanded" : ""}`} onClick={() => setIsHome((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isHome ? "block" : "none"}` }}>
                    {
                        home_link.map((Item: NavItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.link ? "current" : ""}`}>
                                <Link to={Item?.link}>{Item?.value}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath ===  "/inner/about"  ? "current" : ""} onClick={closeMobileManu}>
                <Link to="/inner/about">About Us</Link>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isPages || findLocation(pages_link) ? "expanded" : ""}`}>
                    Pages
                    <button onClick={() => setIsPages((pre) => (!pre))} className={`${isPages ? "expanded" : ""}`} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isPages ? "block" : "none"}` }}>
                    {
                        pages_link.map((Item: NavItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.link ? "current" : ""}`}>
                                <Link to={Item?.link}>{Item?.value}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isCars || findLocation(cars_link) ? "expanded" : ""}`}>
                    Cars
                    <button className={`${isCars ? "expanded" : ""}`} onClick={() => setIsCars((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isCars ? "block" : "none"}` }}>
                    {
                        cars_link.map((Item: NavItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.link ? "current" : ""}`} >
                                <Link to={Item?.link}>{Item?.value}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isShop || findLocation(shops_link) ? "expanded" : ""}`}>
                    Shop
                    <button className={`${isShop ? "expanded" : ""}`} onClick={() => setIsShop((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>

                </a>
                <ul className="shadow-box" style={{ display: `${isShop ? "block" : "none"}` }}>
                    {
                        shops_link.map((Item: NavItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.link ? "current" : ""}`} >
                                <Link to={Item?.link}>{Item?.value}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className="dropdown">
                <a href="#" className={`${isBlog || findLocation(blogs_link) ? "expanded" : ""}`}>
                    Blog
                    <button className={`${isBlog ? "expanded" : ""}`} onClick={() => setIsBlog((pre) => (!pre))} > <i className="fa fa-angle-down"></i></button>
                </a>
                <ul className="shadow-box" style={{ display: `${isBlog ? "block" : "none"}` }}>
                    {
                        blogs_link.map((Item: NavItem) => (
                            <motion.li
                                onClick={closeMobileManu}
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.1 * Item?.id,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                key={Item?.id} className={`${currentPath === Item?.link ? "current" : ""}`} >
                                <Link to={Item?.link}>{Item?.value}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </li>
            <li className={`${currentPath === "/inner/contact" ? "current" : ""}`} onClick={closeMobileManu}>
                <Link to="/inner/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MobileManuList;