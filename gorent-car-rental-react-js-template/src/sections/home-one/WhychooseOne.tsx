import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion"
// section title shape
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import counterImg1 from "../../assets/images/resources/counter-one-img-1.jpg";
import counterImg2 from "../../assets/images/resources/counter-one-img-2.jpg";
import counterDot1 from "../../assets/images/shapes/counter-one-dot-1.png";
import counterDot2 from "../../assets/images/shapes/counter-one-dot-2.png";
import TextAnimation from "../../components/elements/TextAnimation";
import AdvanceCountUp from "../../components/elements/AdvanceCountUp";
import { counterData, whyChooseData } from "../../all-content/why-choose/chooseData";
import type { CounterItem, WhyChooseItem } from "../../all-content/why-choose/chooseType";

const WhychooseOne: React.FC = () => {
    return (
        <>
            <section className="why-choose-one">
                <div className="why-choose-one__shape-1"></div>
                <div className="why-choose-one__shape-2"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style2">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape">
                                <img src={sectionTitleShape} alt="Image" />
                            </div>
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            <TextAnimation text="We are innovative and passionate" />
                            <TextAnimation text="about the work we do." />
                        </h2>
                    </div>
                    <div className="row">
                        {
                            whyChooseData.map((item: WhyChooseItem, i) => <motion.div key={item?.id} className="col-xl-4 col-lg-6 col-md-6 "
                                initial={{ y: item?.id % 2 === 0 ? 20 : -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.2 * i + 1,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.5, once: true }}
                            >
                                <div className="why-choose-one__single">
                                    <div className="why-choose-one__icon">
                                        <span className={item.icon}></span>
                                    </div>
                                    <div className="why-choose-one__single-inner">
                                        <h3 className="why-choose-one__title">{item.title}</h3>
                                        <p className="why-choose-one__text">{item.text} </p>
                                    </div>
                                    <div className="why-choose-one__btn-box">
                                        <Link to={"/inner/listing-single"} className="thm-btn"> Rent Now<span className="fas fa-arrow-right"></span> </Link>
                                    </div>
                                </div>
                            </motion.div>)
                        }
                    </div>
                </div>
            </section>
            <section className="counter-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="counter-one__left">
                                <div className="section-title text-left sec-title-animation animation-style1">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape">
                                            <img src={sectionTitleShape} alt="Image" />
                                        </div>
                                        <span className="section-title__tagline">fun facts</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        <TextAnimation text="experience freedom on" />
                                        <TextAnimation text="our car booking service" />
                                    </h2>
                                </div>
                                <p className="counter-one__text">Dominion fowe there light she does lights begining subdue
                                    without run saying <br /> moving winger Open multiply a green form lesser</p>
                                <div className="counter-one__main-content">
                                    <ul className="list-unstyled counter-one__list">
                                        {
                                            counterData.map((item: CounterItem, i) => <motion.li
                                                initial={{ x: item?.id % 2 === 0 ? 30 : -30, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2 * i + 1,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.01, once: true }}
                                                key={item?.id}>
                                                <div className="counter-one__single">
                                                    <div className="counter-one__shape-1"></div>
                                                    <div className="counter-one__shape-2"></div>
                                                    <div className="counter-one__single-inner">
                                                        <div className="counter-one__icon">
                                                            <span className={item.icon}></span>
                                                        </div>
                                                        <div className="counter-one__count-box">
                                                            <h3 className="odometer"><AdvanceCountUp ending={item?.count} /></h3>
                                                            <span>{item?.suffix}</span>
                                                        </div>
                                                        <p className="counter-one__count-text">{item?.text}</p>
                                                    </div>
                                                </div>
                                            </motion.li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <motion.div
                                initial={{ x: 70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                className="counter-one__right">
                                <div className="counter-one__img-box">
                                    <div className="counter-one__img ">
                                        <img src={counterImg1} alt="Image" />
                                    </div>
                                    <div className="counter-one__img-two ">
                                        <img src={counterImg2} alt="Image" />
                                    </div>
                                    <div className="counter-one__dot-1">
                                        <img src={counterDot1} alt="Image" />
                                    </div>
                                    <div className="counter-one__dot-2 float-bob-y">
                                        <img src={counterDot2} alt="Image" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhychooseOne;
