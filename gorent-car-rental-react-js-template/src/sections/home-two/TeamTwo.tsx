import React from 'react';
import { motion } from "framer-motion"
import tagline from "../../assets/images/shapes/section-title-tagline-shape-1.png"
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';
import { teamMembersTwo } from '../../all-content/team/teamData';
import type { TeamMemberTwo } from '../../all-content/team/teamType';


const TeamTwo: React.FC = () => {
    return (
        <section className="team-two" id='driver'>
            <div className="team-two__shape-1"></div>
            <div className="team-two__shape-2"></div>

            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src={tagline} alt="Image" />
                        </div>
                        <span className="section-title__tagline">Expert Drivers</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Meet The Expert Drivers' />
                    </h2>
                </div>

                <div className="row">
                    {teamMembersTwo.map((member: TeamMemberTwo) => (
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.3 * member?.id,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.1, once: true }}
                            key={member.id}
                            className={`col-xl-3 col-lg-6 col-md-6 wow `}
                        >
                            <div className="team-two__single">
                                <div className="team-two__img-box">
                                    <div className="team-two__img">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                </div>

                                <div className="team-two__content">
                                    <div className="team-two__title-box">
                                        <h3 className="team-two__title">
                                            <Link to={member.link}>{member.name}</Link>
                                        </h3>
                                        <div className="team-two__sub-title">
                                            {member.role}
                                        </div>
                                    </div>

                                    <div className="team-two__share-and-social">
                                        <div className="team-two__share">
                                            <span className="fas fa-share-alt"></span>
                                        </div>
                                        <div className="team-two__social">
                                            <Link to="#"><span className="icon-facebook"></span></Link>
                                            <Link to="#"><span className="icon-instagram-1"></span></Link>
                                            <Link to="#"><span className="icon-linkedin"></span></Link>
                                            <Link to="#"><span className="icon-twitter"></span></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamTwo;
