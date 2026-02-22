import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion"
import sectionTitleShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import TextAnimation from "../../components/elements/TextAnimation";
import { whyChooseData } from "../../all-content/why-choose/chooseData";
import type { WhyChooseItem } from "../../all-content/why-choose/chooseType";

const WhychooseOne: React.FC = () => {
    return (
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
    );
};

export default WhychooseOne;
