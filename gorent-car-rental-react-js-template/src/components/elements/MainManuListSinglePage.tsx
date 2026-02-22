import React from 'react';
import { Link } from 'react-router';

interface ManuItem {
    id: number;
    link: string;
    linkId: string;
}
interface ComponentProps {
    manuList?: ManuItem[]
}
const manuItems: ManuItem[] = [
    { id: 1, linkId: "home", link: "Home" },
    { id: 2, linkId: "services", link: "Services" },
    { id: 3, linkId: "about", link: "About Us" },
    { id: 4, linkId: "cars", link: "Cars" },
    { id: 5, linkId: "testimonial", link: "Testimonial" },
    { id: 6, linkId: "driver", link: "Driver" },
    { id: 7, linkId: "blog", link: "Blog" },
]

const MainManuListSinglePage: React.FC<ComponentProps> = ({ manuList = manuItems }) => {

    return (
        <ul className="main-menu__list one-page-scroll-menu">
            {
                manuList.map((item) => (
                    <li className="scrollToLink" key={item?.id}>
                        <Link
                            to={`#${item?.linkId}`}
                            onClick={(e) => {
                                e.preventDefault();
                                // scrollToSection(item.linkId);
                            }}
                        >
                            {item?.link}
                        </Link>
                    </li>
                ))
            } 
        </ul>
    );
};

export default MainManuListSinglePage;