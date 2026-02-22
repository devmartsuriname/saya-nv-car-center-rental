import React from 'react';
import { Link } from 'react-router';
import MainManuList from '../../components/elements/MainManuList';
import logoOne from "../../assets/images/resources/logo-1.png";
import useGorentContext from '../../components/context/useGorentContext';
import { onePageManuListThree } from '../../components/link-content/NavLink';

const HeaderThree: React.FC = () => {
    const { setIsSearch, setIsSidebar, setIsMobileManu, cartCount } = useGorentContext();
    return (
        <header className="main-header">
            <nav className="main-menu" >
                <div className="main-menu__wrapper" >
                    <div className="main-menu__wrapper-inner" >
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link to="/"><img src={logoOne} alt="Image" /></Link>
                            </div>
                        </div>
                        <div className="main-menu__middle-box">
                            <div className="main-menu__main-menu-box">
                                <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobileManu((pre) => (!pre))}><i className="fa fa-bars"></i></a>
                                <MainManuList onePageManuList={onePageManuListThree} />
                            </div>
                            <div className="main-menu__search-cart-box">
                                <div className="main-menu__search-box" onClick={() => setIsSearch((pre) => !pre)}>
                                    <a href="#" className="main-menu__search search-toggler icon-search"></a>
                                </div>
                                <div className="main-menu__cart-box">
                                    <Link to="/inner/cart" className="main-menu__cart">
                                        <span className="far fa-shopping-cart"></span>
                                        <span className="main-menu__cart-count">0{cartCount}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__call">
                                <div className="main-menu__call-icon">
                                    <i className="icon-call-3"></i>
                                </div>
                                <div className="main-menu__call-content">
                                    <p className="main-menu__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu__call-number"><a href="tel:23645689622">+236 (456) 896 22</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu__nav-sidebar-icon" onClick={() => setIsSidebar((pre) => !pre)}>
                                <a className="navSidebar-button" href="#">
                                    <span className="icon-dots-menu-one"></span>
                                    <span className="icon-dots-menu-two"></span>
                                    <span className="icon-dots-menu-three"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderThree;