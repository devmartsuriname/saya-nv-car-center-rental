import React from 'react';

import logoTwo from "../../assets/images/resources/logo-2.png";
import { Link, useLocation } from 'react-router';
import useGorentContext from '../context/useGorentContext';
import MobileManuList from './MobileManuList';
import MobileManuListSingle from './MobileManuListSingle';
import { onePageManuListOne, onePageManuListThree, onePageManuListTwo } from '../link-content/NavLink';

const MobileNav: React.FC = () => {
    const { isMobileManu, setIsMobileManu } = useGorentContext();
    const currentPath = useLocation().pathname;
    const isOnePage = currentPath.includes("one-page")

    return (
        <div className={`mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`}>
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}></div>
            {/* <!-- /.mobile-nav__overlay --> */}
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}><i className="fa fa-times"></i></span>

                <div className="logo-box">
                    <Link to="/" aria-label="logo image" onClick={() => setIsMobileManu((pre) => (!pre))}>
                        <img src={logoTwo} alt="Logo" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    {
                        isOnePage ? <MobileManuListSingle onePageManuListProp={
                            currentPath === "/index-one-page" ? onePageManuListOne : currentPath === "/index-two-one-page" ? onePageManuListTwo : onePageManuListThree
                        } /> : <MobileManuList />
                    }
                    
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@packageName__.com">needhelp@gorent.com</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-pinterest-p"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;