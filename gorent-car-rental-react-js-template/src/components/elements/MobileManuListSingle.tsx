import React from 'react';
import { Link } from 'react-router';
import useGorentContext from '../context/useGorentContext';
import type { ManuItemOnePage } from '../link-content/LinkType';
interface ComponentProps {
    onePageManuListProp: ManuItemOnePage[]
}
type ScrollToSection = (id: string) => void;

const MobileManuListSingle: React.FC<ComponentProps> = ({ onePageManuListProp }) => {
    const { activeSection, setIsMobileManu } = useGorentContext();
    const scrollToSection: ScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 70; // adgust height
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };
    return (
        <ul className="main-menu__list one-page-scroll-menu">
            {
                onePageManuListProp.map((item) => (
                    <li className={`scrollToLink ${activeSection === item?.linkId ? "current" : ""}`} key={item?.id}>
                        <Link
                            to={`#${item?.linkId}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.linkId);
                                setIsMobileManu(false)
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

export default MobileManuListSingle;