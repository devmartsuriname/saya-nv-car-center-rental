import React, { useState } from "react";
import faqImg from "../../assets/images/resources/faq-one-img-1.jpg";
import sectionShape from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import { faqData } from "../../all-content/faq/faqData";
import { motion } from "framer-motion"
import TextAnimation from "../../components/elements/TextAnimation";

const FaqOne: React.FC = () => {
    const [isActiveFaq, setIsActiveFaq] = useState<number | null>(2);
    return (
        <section className="faq-one">
            <div className="faq-one__shape-1"></div>
            <div className="faq-one__shape-2"></div>

            <div className="container">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-xl-6 col-lg-5">
                        <div className="faq-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src={sectionShape} alt="shape" />
                                    </div>
                                    <span className="section-title__tagline">Our Faqs</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text="Frequently Asking Any" />
                                    <TextAnimation text="Question" />

                                </h2>
                            </div>

                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.05, once: true }}
                                className="faq-one__img-box">
                                <div className="faq-one__img">
                                    <img src={faqImg} alt="FAQ" />
                                </div>
                                <div className="faq-one__experience-box">
                                    <div className="faq-one__experience-year">
                                        <h2 className="odometer" data-count="55">
                                            55
                                        </h2>
                                    </div>
                                    <p className="faq-one__experience-text">
                                        Year of <br /> experience
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-xl-6 col-lg-7">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" >
                                {faqData.map((item) => (
                                    <motion.div
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.08 * item.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.05, once: true }}
                                        key={item.id} className={`accrodion wow  ${isActiveFaq === item.id ? "active" : ""}`}
                                    >
                                        <div className="accrodion-title" onClick={() => setIsActiveFaq(item?.id)}>
                                            <h4>{item.question}</h4>
                                        </div>
                                        <motion.div
                                            initial={{ y: -40, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.05 }}
                                            className="accrodion-content" style={{ display: `${isActiveFaq === item.id ? "block" : "none"}` }}
                                        >
                                            <div className="inner">
                                                <p>{item.answer}</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqOne;
