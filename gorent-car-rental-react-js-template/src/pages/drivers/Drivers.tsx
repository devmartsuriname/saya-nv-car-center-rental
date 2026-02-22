import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import Banner from '../../sections/common/Banner';
import { driversData } from '../../all-content/team/teamData';
const Drivers: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Drivers' />
            <section className="team-three">
                <div className="container">
                    <div className="row">
                        {driversData.map((member, i) => (
                            <motion.div
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.2 * i,
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
        </>
    );
};

export default Drivers;