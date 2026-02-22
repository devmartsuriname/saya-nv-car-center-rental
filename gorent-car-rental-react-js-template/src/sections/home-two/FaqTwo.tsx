import React, { useState } from 'react';
import TextAnimation from '../../components/elements/TextAnimation';
import { motion } from "framer-motion"
import { faqTwo } from '../../all-content/faq/faqData';

const FaqTwo: React.FC = () => {
    const [isActiveFaq, setIsActiveFaq] = useState<number | null>(2);
    return (
        <section className="faq-two">
            <div className="faq-two__shape-1"></div>
            <div className="faq-two__shape-2"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape-1.png" alt="Image" />
                        </div>
                        <span className="section-title__tagline">Our Faqs</span>
                    </div>
                    <h2 className="section-title__title title-animation"><TextAnimation text='Frequently Asking Any Question' /></h2>
                </div>
                <div className="faq-two__inner-content">
                    <div className="accrodion-grp faq-one-accrodion" >
                        {
                            faqTwo.map((item) => (
                                <motion.div
                                    key={item?.id}
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.08 * item.id,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ amount: 0.05, once: true }}
                                    className={`accrodion wow  ${isActiveFaq === item.id ? "active" : ""}`}
                                >
                                    <div className="accrodion-title" onClick={() => setIsActiveFaq(item?.id)}>
                                        <h4>{item?.question}</h4>
                                    </div>
                                    <motion.div
                                        initial={{ y: -40, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.05 }}
                                        className="accrodion-content" style={{ display: `${isActiveFaq === item.id ? "block" : "none"}` }}>
                                        <div className="inner">
                                            <p> {item?.description}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqTwo;