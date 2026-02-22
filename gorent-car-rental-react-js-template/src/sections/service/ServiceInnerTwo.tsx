import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
// Images
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import { servicesThreeData } from '../../all-content/service/service';
import type { ServiceThreeItem } from '../../all-content/service/serviceType';
import TextAnimation from '../../components/elements/TextAnimation';

interface SectionClassProps {
    sectionClass?: string;
}
const ServiceInnerTwo: React.FC<SectionClassProps> = ({ sectionClass = "" }) => {
    return (
        <section className={`services-three ${sectionClass}`}>
            <div className="services-three__shape-1"></div>
            <div className="services-three__shape-2"></div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src={taglineShape} alt="Tagline Shape" />
                        </div>
                        <span className="section-title__tagline">
                            What We’re Offering
                        </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text={`Services We’re Provding`} />
                        <TextAnimation text={`to Customers`} />
                    </h2>
                </div>

                {/* Services */}
                <div className="row">
                    {servicesThreeData.map((service: ServiceThreeItem, i) => (
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
                            <div className="services-three__single">
                                <div className="services-three__icon">
                                    <span className={service.iconClass}></span>
                                </div>

                                <div className="services-three__content">
                                    <h3 className="services-three__title">
                                        <Link to="/inner/services">
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <p className="services-three__text">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="services-three__count"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceInnerTwo;
