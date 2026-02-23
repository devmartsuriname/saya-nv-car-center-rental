import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import footerLogo from "../../assets/images/resources/footer-logo.png"
interface LinkItem {
    id: number;
    link: string;
    title: string;
}

const linkOne: LinkItem[] = [
    { id: 1, link: "/inner/about", title: "About Us" },
    { id: 2, link: "/inner/services", title: "Our Services" },
    { id: 3, link: "/inner/drivers", title: "Our Drivers" },
    { id: 4, link: "/inner/blog", title: "Our Blog" },
    { id: 5, link: "/inner/contact", title: "Contact Us" }
];
const linkTwo: LinkItem[] = [
    { id: 1, link: "/inner/car-list-v-1", title: "Your Reliable Ride" },
    { id: 2, link: "/inner/car-list-v-2", title: "Express Shuttle" },
    { id: 3, link: "/inner/car-list-v-3", title: "Travel in Style" },
    { id: 4, link: "/inner/cars", title: "Rental List" },
    { id: 5, link: "/inner/listing-single", title: "Dash Transport" },
]

const Footer: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const email = form.email.value;

        if (email) {
            form.reset();
        };

    };
    return (
        <footer className="site-footer">
            <div className="site-footer__bg"></div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link to="/"><img src={footerLogo} alt="logo" /></Link>
                                    </div>
                                    <p className="footer-widget__about-text">Car Is Where Early Adopters And Innovation
                                        Seekers Find Lively
                                        Imaginative Tech.</p>
                                    <form className="footer-widget__form" onSubmit={handleSubmit}>
                                        <div className="footer-widget__input">
                                            <input type="email" name='email' placeholder="Your Email" />
                                        </div>
                                        <button type="submit" className="footer-widget__btn"><i className="icon-right-arrow"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__links">
                                    <h4 className="footer-widget__title">Quick links</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        {
                                            linkOne.map((item: LinkItem) => <motion.li
                                                initial={{ x: 40, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2 * item.id,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.5, once: true }}
                                                key={item.id}><Link to={item.link}>{item.title}</Link></motion.li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Services</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        {
                                            linkTwo.map((item: LinkItem) => <motion.li
                                                initial={{ x: 40, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2 * item.id,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.5, once: true }}
                                                key={item.id}><Link to={item.link}>{item.title}</Link></motion.li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact Us</h3>
                                    <ul className="footer-widget__contact-list list-unstyled">
                                        <motion.li
                                            initial={{ x: 40, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.5, once: true }}
                                        >
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <p>4140 Parker Rd. Allentown, New
                                                <br /> Mexico 31134</p>
                                        </motion.li>
                                        <motion.li
                                            initial={{ x: 40, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.5, once: true }}
                                        >
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><a href="tel:2195550114">(219) 555-0114</a></p>
                                        </motion.li>
                                        <motion.li
                                            initial={{ x: 40, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.9,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.5, once: true }}
                                        >
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><a href="mailto:gorent@gmail.com">gorent@gmail.com</a></p>
                                        </motion.li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">
                                        © 2026 By <Link to="/">Gorent</Link> All Rights Reserved.
                                    </p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li><Link to="/inner/about">Terms of Service</Link></li>
                                        <li><Link to="/inner/about">Privacy policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;