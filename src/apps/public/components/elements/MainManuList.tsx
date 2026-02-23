import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { blogs_link, cars_link, home_link, pages_link, shops_link } from '../link-content/NavLink';
import type { NavItem } from '../link-content/LinkType';

const MainManuList: React.FC<{ onePageManuList?: unknown[] }> = () => {
    const currentPath = useLocation().pathname;
    const findLocation = (array: NavItem[]): boolean => {
        return array.some(item => item?.link === currentPath);
    };

    return (
        <ul className="main-menu__list">
            <li className={`dropdown ${findLocation(home_link) ? "current" : ""}`}>
                <a href="#">Home</a>
                <ul className="shadow-box">
                    {
                        home_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""}>
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={currentPath === "/inner/about" ? "current" : ""}>
                <Link to="/inner/about">About Us</Link>
            </li>
            <li className={`dropdown ${findLocation(pages_link) ? "current" : ""}`}>
                <a href="#">Pages</a>
                <ul className="shadow-box">
                    {
                        pages_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(cars_link) ? "current" : ""}`}>
                <a href="#">Cars</a>
                <ul className="shadow-box">
                    {
                        cars_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(shops_link) ? "current" : ""}`}>
                <a href="#">Shop</a>
                <ul className="shadow-box">
                    {
                        shops_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(blogs_link) ? "current" : ""}`}>
                <a href="#">Blog</a>
                <ul className="shadow-box">
                    {
                        blogs_link.map((Item: NavItem) => <li key={Item?.id} className={currentPath === Item?.link ? "current" : ""} >
                            <Link to={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={currentPath === "/inner/contact" ? "current" : ""}>
                <Link to="/inner/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MainManuList;
