import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
// Images
import TextAnimation from '../../components/elements/TextAnimation';
import taglineShape from '../../assets/images/shapes/section-title-tagline-shape-1.png';
import { teamData } from '../../all-content/team/teamData';

const TeamThree: React.FC = () => {
    return (
        <section className="team-three" id='driver'>
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img
                                src={taglineShape}
                                alt="Tagline Shape"
                            />
                        </div>
                        <span className="section-title__tagline">
                            Our Drivers
                        </span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Meet Our Premium Drivers' />
                    </h2>
                </div>

                {/* Team Members */}
                <div className="row">
                    {teamData.map((member, i) => (
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.3 * i,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                            key={member.id}
                            className={`col-xl-3 col-lg-6 col-md-6 `}
                        >
                            <div className="team-three__single">
                                <div className="team-three__img-box">
                                    <div className="team-three__img">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                        />
                                        <div className="team-three__social">
                                            <Link to="/inner/driver-details">
                                                <i className="icon-facebook"></i>
                                            </Link>
                                            <Link to="/inner/driver-details">
                                                <i className="icon-twitter"></i>
                                            </Link>
                                            <Link to="/inner/driver-details">
                                                <i className="icon-linkedin"></i>
                                            </Link>
                                            <Link to="/inner/driver-details">
                                                <i className="icon-instagram-1"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-three__content">
                                    <h3 className="team-three__name">
                                        <Link to="/inner/driver-details">
                                            {member.name}
                                        </Link>
                                    </h3>
                                    <p className="team-three__sub-title">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamThree;
