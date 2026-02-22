import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import MainManuList from '../../components/elements/MainManuList';
import logoOne from "../../assets/images/resources/logo-2.png";
import useGorentContext from '../../components/context/useGorentContext';
import { onePageManuListTwo } from '../../components/link-content/NavLink';
const StrickyHeaderTwo: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } = useGorentContext();
    const [isStick, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link to="/"><img src={logoOne} alt="Logo" /></Link>
                            </div>
                        </div>
                        <div className="main-menu-two__middle-box">
                            <div className="main-menu-two__main-menu-box">
                                <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}><i className="fa fa-bars"></i></a>
                                <MainManuList onePageManuList={onePageManuListTwo} />
                            </div>
                            <div className="main-menu-two__search-cart-box">
                                <div className="main-menu-two__search-box" onClick={() => setIsSearch((pre) => !pre)}>
                                    <a href="#" className="main-menu-two__search search-toggler icon-search"></a>
                                </div>
                                <div className="main-menu-two__cart-box">
                                    <Link to="/inner/cart" className="main-menu-two__cart">
                                        <span className="far fa-shopping-cart"></span>
                                        <span className="main-menu-two__cart-count">0{cartCount}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-call-3"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu-two__call-number"><a href="tel:23645689622">+236 (456) 896
                                        22</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu-two__nav-sidebar-icon" onClick={() => setIsSidebar((pre) => !pre)}>
                                <a className="navSidebar-button" href="#">
                                    <span className="icon-dots-menu-one"></span>
                                    <span className="icon-dots-menu-two"></span>
                                    <span className="icon-dots-menu-three"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyHeaderTwo;