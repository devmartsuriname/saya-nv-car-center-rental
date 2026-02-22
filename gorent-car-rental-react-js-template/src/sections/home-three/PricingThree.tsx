import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
// Images
import TextAnimation from '../../components/elements/TextAnimation';
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import { pricingPlansThree } from '../../all-content/process/processData';

const PricingThree: React.FC = () => {
    return (
        <section className="pricing-two">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src={taglineShape} alt="Tagline Shape" />
                        </div>
                        <span className="section-title__tagline">
                            Pricing & Plan
                        </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Time Quick and Easy to'/> 
                        <TextAnimation text='Transportation'/> 
                        
                    </h2>
                </div>

                {/* Pricing List */}
                <ul className="list-unstyled pricing-two__list">
                    {pricingPlansThree.map((plan) => (
                        <li
                            key={plan.id}
                        >
                            <div className="pricing-two__single">
                                <div className="pricing-two__left-content">
                                    <motion.div
                                        initial={{ x: -80, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.3 * plan?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        className="pricing-two__img">
                                        <img
                                            src={plan?.image}
                                            alt={plan?.title}
                                        />
                                    </motion.div>
                                    <div className="pricing-two__img-content">
                                        <h3 className="pricing-two__title">
                                            {plan.title}
                                        </h3>
                                        <h2 className="pricing-two__price-box">
                                            ${plan.price} <span>/Mon</span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="pricing-two__right-content">
                                    <ul className="list-unstyled pricing-two__points">
                                        {plan.features.map((feature, index) => (
                                            <li key={index}>
                                                <div className="icon">
                                                    <span className="fas fa-check"></span>
                                                </div>
                                                <div className="text">
                                                    <p>{feature}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pricing-two__btn-box">
                                        <Link
                                            to="/inner/pricing"
                                            className="thm-btn"
                                        >
                                            Rent Now
                                            <span className="fas fa-arrow-right"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PricingThree;
