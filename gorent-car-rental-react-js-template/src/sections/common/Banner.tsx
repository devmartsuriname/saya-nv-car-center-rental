import React from 'react';
import { Link } from 'react-router';
interface BannerProps {
    breadcrumb: string;
}
const Banner: React.FC<BannerProps> = ({ breadcrumb }) => {
    return (
        <section className="page-header">
            <div className="page-header__bg"></div>
            <div className="page-header__shape-1"></div>
            <div className="container">
                <div className="page-header__inner">
                    <h3>{breadcrumb}</h3>
                    <div className="thm-breadcrumb__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><span className="icon-arrow-left"></span></li>
                            <li>{breadcrumb}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;