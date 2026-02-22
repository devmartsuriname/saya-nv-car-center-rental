import React from "react";
import titleImg from "../../assets/images/shapes/section-title-tagline-shape-1.png";
import type { ServiceOneItem } from "../../all-content/service/serviceType";
import TextAnimation from "../../components/elements/TextAnimation";
import { motion } from "framer-motion"
import { servicesOneData } from "../../all-content/service/service";
import { Link } from "react-router";

const ServiceOne: React.FC = () => {
    return (
        <section className="services-one" id="services">
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2"></div>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img
                                src={titleImg}
                                alt="shape"
                            />
                        </div>
                        <span className="section-title__tagline">
                            What We’re Offering
                        </span>
                    </div>

                    <h2 className="section-title__title title-animation">
                        <TextAnimation text={`Services We’re Providing`} />
                        <TextAnimation text={`to Customers`} />
                    </h2>
                </div>
                <div className="row">
                    {servicesOneData.map((service: ServiceOneItem, i) => (
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.3 * i,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                            key={service.id}
                            className={`col-xl-3 col-lg-6 col-md-6 wow`}
                        >
                            <div className="services-one__single">
                                <div className="services-one__single-shape-1"></div>
                                <div className="services-one__single-shape-2"></div>
                                <div className="services-one__single-shape-3"></div>
                                <div className="services-one__count"></div>

                                <div className="services-one__icon">
                                    <span className={service.icon}></span>
                                </div>

                                <h3 className="services-one__title">
                                    <Link to="/inner/services">{service.title}</Link>
                                </h3>

                                <p className="services-one__text">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceOne;
