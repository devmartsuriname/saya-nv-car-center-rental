import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router';

// Images
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import aboutImg1 from '../../assets/images/resources/about-three-img-1.jpg';
import aboutImg2 from '../../assets/images/resources/about-three-img-2.jpg';
import aboutImg3 from '../../assets/images/resources/about-three-img-3.jpg';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
import TextAnimation from '../../components/elements/TextAnimation';

const AboutThree: React.FC = () => {
    return (
        <section className="about-three" id='about'>
            <div className="container">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-xl-6">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.1, once: true }}
                            className="about-three__left">
                            <div className="section-title text-left sec-title-animation animation-style1">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src={taglineShape} alt="Tagline Shape" />
                                    </div>
                                    <span className="section-title__tagline">
                                        About Gorent
                                    </span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='Welcome to Gorent'/>
                                     <TextAnimation text='car booking company'/>                                   
                                </h2>
                            </div>

                            <p className="about-three__text-1">
                                Lorem ipsum is simply ipun txns mane so dummy text of free
                                available in market the printing and typesetting industry
                                has been the industry's standard dummy text ever.
                            </p>

                            <div className="about-three__points-box">
                                <ul className="list-unstyled about-three__points">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-car-insurance"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Best Car Rental Services</h3>
                                            <p>
                                                Vivamus arcu felis bibendum ut tristique
                                                et egestas. Ultricies leo intege in
                                                malesuada nunc vel risus commodo.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <span className="icon-range"></span>
                                        </div>
                                        <div className="content">
                                            <h3>Easy & Fast Booking</h3>
                                            <p>
                                                Vivamus arcu felis bibendum ut tristique
                                                et egestas. Ultricies leo intege in
                                                malesuada nunc vel risus commodo.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="about-three__btn-box-and-call-box">
                                    <div className="about-three__btn-box">
                                        <Link
                                            to="/inner/about"
                                            className="about-three__btn thm-btn"
                                        >
                                            Read More
                                            <span className="fas fa-arrow-right"></span>
                                        </Link>
                                    </div>

                                    <div className="about-three__call-box">
                                        <div className="about-three__call-box-icon">
                                            <span className="icon-call-2"></span>
                                        </div>
                                        <div className="about-three__call-box-content">
                                            <p>Call to Anytime</p>
                                            <h4>
                                                <a href="tel:15502505260">
                                                    +1 (550) 250 5260
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.1, once: true }}
                            className="about-three__right wow slideInRight"
                        >
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="about-three__img-box">
                                        <div className="about-three__img-1">
                                            <img src={aboutImg1} alt="About Image 1" />
                                        </div>
                                        <div className="about-three__img-2">
                                            <img src={aboutImg2} alt="About Image 2" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="about-three__satisfied-and-img">
                                        <div className="about-three__satisfied-box">
                                            <div className="icon">
                                                <span className="icon-reviews"></span>
                                            </div>
                                            <div className="about-three__count-box">
                                                <div className="about-three__count count-box">
                                                    <h3
                                                        className="count-text"
                                                    >
                                                        <AdvanceCountUp ending={2500} />
                                                    </h3>
                                                </div>
                                                <p className="about-three__count-text">
                                                    Satisfied Client
                                                </p>
                                            </div>
                                        </div>

                                        <div className="about-three__img-3">
                                            <img src={aboutImg3} alt="About Image 3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* End Right */}
                </div>
            </div>
        </section>
    );
};

export default AboutThree;
