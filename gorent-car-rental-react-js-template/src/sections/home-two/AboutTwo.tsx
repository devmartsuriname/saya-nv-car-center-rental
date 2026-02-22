import React from 'react';

import tagLine from "../../assets/images/shapes/section-title-tagline-shape-1.png"
import resource1 from "../../assets/images/resources/about-two-img-1.jpg"
import resource2 from "../../assets/images/resources/about-two-img-2.jpg"
import { Link } from 'react-router';
import useGorentContext from '../../components/context/useGorentContext';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
import TextAnimation from '../../components/elements/TextAnimation';
const AboutTwo: React.FC = () => {
    const { handleVideoClick } = useGorentContext()
    return (
        <section className="about-two" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left">
                            <div className="section-title text-left sec-title-animation animation-style1">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src={tagLine} alt="image" />
                                    </div>
                                    <span className="section-title__tagline">About Gorent</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='Welcome to Gorent'/>
                                    <TextAnimation text='car booking company'/>
                                    </h2>
                            </div>
                            <p className="about-two__text-1">Lorem ipsum is simply ipun txns mane so dummy text of free
                                available in market the printing and typesetting industry has been the industry's
                                standard dummy text ever.</p>
                            <ul className="about-two__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-checked"></span>
                                    </div>
                                    <p>Sports and Luxury Cars</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-checked"></span>
                                    </div>
                                    <p>Economy Cars</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-checked"></span>
                                    </div>
                                    <p>Best Car Rental Services</p>
                                </li>
                            </ul>
                            <div className="about-two__progress-box">
                                <div className="about-two__progress-single">
                                    <div className="graph-outer">
                                        <div className="roundWrap">
                                            <div className="roundInner"></div>
                                        </div>
                                        <div className="inner-text count-box">
                                            <span className="count-text" data-stop="95" data-speed="2000"></span>
                                            <span className="count-Parsent"><span className='fontSize'><AdvanceCountUp ending={95} /></span>%</span>
                                        </div>
                                    </div>
                                    <div className="about-two__progress-text-box">
                                        <h4>Saticfied Clients</h4>
                                    </div>
                                </div>
                                <div className="about-two__progress-single">
                                    <div className="graph-outer">
                                        <div className="roundWrap">
                                            <div className="roundInner"></div>
                                        </div>
                                        <div className="inner-text count-box"><span className="count-text" data-stop="98"
                                            data-speed="2000"></span><span className="count-Parsent"><span className='fontSize'><AdvanceCountUp ending={98}/></span> %</span>
                                        </div>
                                    </div>
                                    <div className="about-two__progress-text-box">
                                        <h4>Success Rate</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="about-two__btn-box-and-call-box">
                                <div className="about-two__btn-box">
                                    <Link to="/inner/about" className="about-two__btn thm-btn">Read More<span className="fas fa-arrow-right"></span></Link>
                                </div>
                                <div className="about-two__call-box">
                                    <div className="about-two__call-box-icon">
                                        <span className="icon-call-2"></span>
                                    </div>
                                    <div className="about-two__call-box-content">
                                        <p>Call to Anytime</p>
                                        <h4><a href="tel:15502505260">+1 (550) 250 5260</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="about-two__img-box">
                                <div className="about-two__img">
                                    <img src={resource1} alt="Image" />
                                </div>
                                <div className="about-two__img-two">
                                    <img src={resource2} alt="Image" />
                                </div>
                                <div className="about-two__video-link">
                                    <Link to="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=Get7rqXYrbQ")}>
                                        <div className="about-two__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="about-two__experience">
                                    <div className="about-two__experience-count">
                                        <h3 className="odometer" data-count="50"><AdvanceCountUp ending={50} /></h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-two__experience-text">Years of <br />Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTwo;